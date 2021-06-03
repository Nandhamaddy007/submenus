import React, { useEffect } from 'react';
import $ from 'jquery';
import './styles.css';
let ls = [];
let out = [];

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
  let rend = option => {
    console.log(option);
    if (option.option && option.option != '') {
      //console.log(option.option);
      return (
        <li>
          {option.select}
          {construct(option.option)}
        </li>
      );
    } else {
      // console.log(option);
      return <li>{option.select}</li>;
    }
  };
  let construct = options => {
    let data = [];
    for (let option of options) {
      // console.log(option);
      data.push(rend(option));
    }
    if (options.option && options.option != '') {
      return <ul>{data}</ul>;
    } else {
      return <ul className="dropdown-menu">{data}</ul>;
    }
  };

  let options = [
    {
      select: 'Option1',
      option: [
        {
          select: 'Level2',
          option: ''
        }
      ]
    },
    {
      select: 'Option2',
      option: [
        {
          select: 'level2',
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
          select: 'level3',
          option: [
            {
              select: 'level3.1',
              option: ''
            }
          ]
        }
      ]
    }
  ];
  out = construct(options);
  // console.log(out);
  return (
    <div>
      <div class="dropdown">
        <a
          href="#"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          Click Here
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
      </div>

      {/* {out} */}
    </div>
  );
}
