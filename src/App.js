import React from 'react';
import './style.css';
let ls = [];
let out = [];

export default function App() {
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
      select: 'option2',
      option: [
        {
          select: 'Level2',
          option: ''
        }
      ]
    },
    {
      select: 'option1',
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
  return <div>{out}</div>;
}
