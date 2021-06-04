import React, { useEffect } from 'react';
import $ from 'jquery';
import './styles.css';
let ls = [];
let out = [];
let ids = [];

export default function App() {
  useEffect(() => {
    $(function() {
      $('.dropdown-menu > li > a.trigger').on('click', function(e) {
        var current = $(this).next();
        var grandparent = $(this)
          .parent()
          .parent();
        if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
          $(this).toggleClass('right-caret left-caret');
        grandparent
          .find('.left-caret')
          .not(this)
          .toggleClass('right-caret left-caret');
        grandparent
          .find('.sub-menu:visible')
          .not(current)
          .hide();
        current.toggle();
        e.stopPropagation();
      });
      $('.dropdown-menu > li > a:not(.trigger)').on('click', function() {
        var root = $(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
      });
    });
  });
  let rend = (option, index) => {
    console.log(index);
    ids.push(index);
    if (option.option && option.option != '') {
      //console.log(option.option);

      return (
        <li id={index}>
          <a className="trigger right-caret">{option.select}</a>
          {construct(option.option, index)}
        </li>
      );
    } else {
      // console.log(option);
      return (
        <li id={index}>
          <a>{option.select}</a>
        </li>
      );
    }
  };
  let construct = (options, ind) => {
    let data = [];
    for (let [index, option] of options.entries()) {
      ls.push(option.select);
      data.push(rend(option, ind != undefined ? ind + '.' + index : index));
    }
    //console.log(ls);
    if (options.option && options.option != '') {
      return <ul>{data}</ul>;
    } else {
      return <ul className="dropdown-menu sub-menu">{data}</ul>;
    }
  };

  let options = [
    {
      select: 'Option1',
      option: [
        {
          select: 'Level1',
          option: ''
        }
      ]
    },
    {
      select: 'Option2',
      option: [
        {
          select: 'level1.1',
          option: [
            {
              select: 'level2.1',
              option: ''
            },
            {
              select: 'level2.2',
              option: [
                {
                  select: 'level2.2.1',
                  option: ''
                },
                {
                  select: 'level2.2.2',
                  option: ''
                }
              ]
            }
          ]
        },
        {
          select: 'level1.2',
          option: [
            {
              select: 'level2.3.1',
              option: ''
            },
            {
              select: 'level2.3.2',
              option: ''
            }
          ]
        }
      ]
    }
  ];
  out = construct(options);
  // console.log(out);
  function handleClick(e) {
    document.getElementById('');
  }
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              N level DropDown
            </a>
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#dropdown"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="dropdown">
            <ul class="nav navbar-nav">
              <li className="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Dynamic Dropdown
                  <span class="caret" />
                </a>
                {out}
              </li>
              <li class="dropdown">
                <a href="#" class=" dropdown-toggle" data-toggle="dropdown">
                  Static Dropdown
                  <span class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="trigger right-caret">Level 1</a>
                    <ul class="dropdown-menu sub-menu">
                      <li>
                        <a href="#">Level 2</a>
                      </li>
                      <li>
                        <a class="trigger right-caret">Level 2</a>
                        <ul class="dropdown-menu sub-menu">
                          <li>
                            <a href="#">Level 3</a>
                          </li>
                          <li>
                            <a href="#">Level 3</a>
                          </li>
                          <li>
                            <a class="trigger right-caret">Level 3</a>
                            <ul class="dropdown-menu sub-menu">
                              <li>
                                <a href="#">Level 4</a>
                              </li>
                              <li>
                                <a href="#">Level 4</a>
                              </li>
                              <li>
                                <a href="#">Level 4</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Level 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Level 1</a>
                  </li>
                  <li>
                    <a href="#">Level 1</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <select id="option">
        {ls.map((item, index) => {
          return <option value={ids[index]}>{item}</option>;
        })}
      </select>
      <input
        type="text"
        style={{
          width: '20rem',
          height: '3rem',
          marginLeft: '5rem',
          marginTop: '1rem'
        }}
        className="form-control"
      />
      <button
        className="btn btn-primary"
        style={{ marginLeft: '19rem', marginTop: '1rem' }}
        click={handleClick}
      >
        Add+
      </button>
    </div>
  );
}
