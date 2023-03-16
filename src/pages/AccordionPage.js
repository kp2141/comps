import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id:'asdf',
      label:'Can i use React in this peoject',
      content:'You can use React in any other project you want',
    },
    {
      id:'asdkf',
      label:'Can i use CSS in this peoject',
      content:'You can use CSS in any other project you want',
    },
    {
      id:'ftgyfj',
      label:'Can i use HTML in this peoject',
      content:'You can use HTML in any other project you want',
    },
  ]

  return <Accordion items={items}/>;
}

export default AccordionPage;
