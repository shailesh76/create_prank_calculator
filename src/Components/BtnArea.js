import React from 'react'
import { Button } from './Button'

export const BtnArea = ({ handleOnButtonClick}) => {

  const btnArg = [
    {
      cls: "btn-small",
       label: "(",
    },
    {
      cls: "btn-bracket",
       label: ")",
    },
    {
      cls: "btn-prec",
       label: "%",
    },
    {
      cls: "btn-ac",
       label: "AC",
    },
    {
      cls: "btn-7",
       label: "7",
    },
    {
      cls: "btn-8",
       label: "8",
    },
    {
      cls: "btn-9",
       label: "9",
    },
    {
      cls: "btn-divide",
       label: "/",
    },
    {
      cls: "btn-4",
       label: "4",
    },
    {
      cls: "btn-5",
       label: "5",
    },
    {
      cls: "btn-6",
       label: "6",
    },
    {
      cls: "btn-x",
       label: "*",
    },
    {
      cls: "btn-1",
       label: "1",
    },
    {
      cls: "btn-2",
       label: "2",
    },
    {
      cls: "btn-3",
       label: "3",
    },
    {
      cls: "btn-subtract",
       label: "-",
    },
    {
      cls: "btn-0",
       label: "0",
    },
    {
      cls: "btn-dot",
       label: ".",
    },
    {
      cls: "btn-equals",
       label: "=",
    },
    {
      cls: "btn-add",
       label: "+",
    },
  ];
  return (
    <>
    {
      btnArg.map((item, i)=> (
      // <Button cls={item.cls} label ={item.label}/>)
        <Button key={i} {...item} handleOnButtonClick={ handleOnButtonClick} />
    ))
    }
           
           
     </>
  );
};
