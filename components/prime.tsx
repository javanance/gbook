"use client";
import React, { Children, useRef, useState, useEffect, ReactNode } from "react";
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import "./theme.module.scss";
// import '../styles/goftheme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';

import { Button } from "primereact/button";
import {
  Accordion,
  AccordionTab,
  AccordionProps,
  AccordionTabProps,
} from "primereact/accordion";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Message } from "primereact/message";
import { PrimeIcons } from "primereact/api";
import { Image } from "primereact/image";
import { Chip } from "primereact/chip";
import type { CardProps } from "primereact/card";
import type { ImageProps } from "primereact/image";
import { ChipsProps } from "primereact/chips";
import { string } from "prop-types";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";

import checklist from "@/public/data/check.json";

// const H2({ children }: { children?: React.ReactNode }) {
//   return (
//     <h4 className="mdx-h1" id={children?.toString.split(" ").join("-")}>
//       {children}
//     </h4>
//   );
// }
interface InputWrapperProps {
  id?: string;
  children?: React.ReactNode;
}
const GofH1 = ({ children }: { children?: ReactNode }) => {
  // const GofH1 = ({ props }: { props: InputWrapperProps }) => {
  //   const { id, children } = props;
  // console.log("zzzzz");
  // console.log(children);
  // const bbb = children.type == string ? children?.toString : "aa";
  // console.log(id.split(" ").join("-").replace(".", "").toUpperCase());
  // const achor = id.split(" ").join("-").replace(".", "").toUpperCase();
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;

  console.log("zzzzz1");
  // console.log(id);
  // console.log(children);
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // console.log(anchorList);
  // const achor = anchorList.replace("]", "").toUpperCase();

  // const idArray = id.split("-");

  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // const anchor = idArray[idArray.length - 1].toLowerCase();

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  // const anchor = title.split(" ").join("-").toUpperCase();
  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();

  return (
    <h4 className="!tw-mt-8 !tw-leading-10" id={anchor}>
      {title}
    </h4>
  );
};

const GofH2 = ({ children }: { children?: ReactNode }) => {
  // const GofH2 = ({ props }: { props: InputWrapperProps }) => {
  //   const { id, children } = props;
  // const achor = id.split(" ").join("-").replace(".", "").toUpperCase();

  // console.log("zzzzz2");
  // console.log(id);
  // console.log(children);
  // const idArray = id.split("-");
  // console.log("anchor");
  // console.log(idArray);
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // const anchor = idArray[idArray.length - 1].toUpperCase();
  // console.log(anchor);
  // const achor = anchorList.replace("]", "").toUpperCase();

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  // const anchor = title.split(" ").join("-").toUpperCase();
  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();
  // console.log("title");
  // console.log(title);

  return (
    <h4 className="!tw-mt-8 !tw-leading-10" id={anchor}>
      {title}
    </h4>
  );
};

// const GofListItem = (props) => {
//   console.log("bbbb");
//   console.log(props);
//   return (
//     <li
//       className="tw-list-none tw-pl-8 -tw-indent-6 !tw-leading-10"
//       id={props.name}
//     >
//       {/* <li className="tw-list-none list-inside tw-pl-8  -tw-indent-6 !tw-leading-10"> */}
//       {props.children}
//     </li>
//   );
// };

const GofListItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <li className="tw-list-none tw-pl-8 -tw-indent-6 !tw-leading-10">
      {/* <li className="tw-list-none list-inside tw-pl-8  -tw-indent-6 !tw-leading-10"> */}
      {children}
    </li>
  );
};

const GAccordion = ({
  props,
  children,
}: {
  props: AccordionProps;
  children: ReactNode;
}) => {
  return (
    <Accordion {...props}>
      <div>{children}</div>
    </Accordion>
  );
};

const GAccordionTab = ({
  props,
  children,
}: {
  props: AccordionTabProps;
  children: ReactNode;
}) => {
  return (
    <AccordionTab {...props}>
      <div>{children}</div>
    </AccordionTab>
  );
};

const GSheet = ({
  height,
  title,
  children,
}: {
  height: string;
  title: string;
  children: ReactNode;
}) => {
  // const { height = "min-h-screen", title } = props;

  // const children = props.children;
  return (
    <Card className={height} title={title}>
      {children}
    </Card>
  );
};

const G2Col = ({ children }: { children: ReactNode[] }) => {
  // const children = props.children;
  // const child1 = children.
  return (
    <div className="grid">
      <div className="col-12 md:col-6">{children[0]}</div>
      <div className="col-12 md:col-6">{children[1]}</div>
    </div>
  );
};

// const M2 = function TemplateDemo({prop, children}) {
const M1 = ({
  severity = "info",
  width = "100%",
  borderWidth = "0 0 0 6px",
  icon = "pi pi-cog",
  text,
}: {
  severity: "success" | "info" | "warn" | "error" | undefined;
  width: string;
  borderWidth: string;
  icon: string;
  text: string;
}) => {
  const content = (
    <div>
      {/* <i className={icon} style= {{paddingRight: '5px'}}></i> */}
      {/* <span className={icon} style= {{ fontSize: '1rem' , paddingRight: '10px'}}></span> */}

      {text}
    </div>
  );
  return (
    <Message
      style={{
        // border: 'solid #696cff',
        // borderWidth: '0 0 0 6px',
        borderWidth: borderWidth,
        // justifyContent: 'left',
        display: "block",
        width: width,
      }}
      // className="border-primary w-full justify-content-start"
      severity={severity}
      // icon= {icon}
      content={text}
    ></Message>
  );
};

const Callout = ({
  severity = "info",
  width = "100%",
  borderWidth = "0 0 0 6px",
  children,
}: {
  severity: "success" | "info" | "warn" | "error" | undefined;
  width: string;
  borderWidth: string;
  children: ReactNode;
}) => {
  const content = <div style={{ width: "100%" }}>{children}</div>;

  // const { severity= 'info' , width='100%', height='-webkit-fill-available',  borderWidth='0 0 0 6px'} = props;
  // const {
  //   severity = "info",
  //   width = "100%",
  //   borderWidth = "0 0 0 6px",
  // } = props;
  return (
    <Message
      style={{
        borderWidth: borderWidth,
        justifyContent: "left",
        width: width,
        // height: height,
        alignItems: "start",
      }}
      // className="border-primary w-full justify-content-start"
      severity={severity}
      // icon= { PrimeIcons.PLUS}
      content={content}
    ></Message>
  );
};

const Math = ({
  fontSize = "1.0rem",
  width = "100%",
  borderWidth = "0 0 0 6px",
  marginRatio = "2%",
  children,
}: {
  fontSize: string;
  width: string;
  borderWidth: string;
  marginRatio: string;
  children: ReactNode;
}) => {
  const content = <div style={{ width: "100%" }}>{children}</div>;

  // const { severity= 'info' , width='100%', height='-webkit-fill-available',  borderWidth='0 0 0 6px'} = props;
  // const {
  //   fontSize = "1.0rem",
  //   width = "100%",
  //   borderWidth = "0 0 0 6px",
  //   marginRatio = "2%",
  // } = props;
  return (
    <div
      style={{
        marginLeft: marginRatio,
        marginRight: marginRatio,
        marginBottom: "10px",
      }}
    >
      <Message
        style={{
          borderWidth: borderWidth,
          justifyContent: "left",
          width: width,
          // height: height,
          alignItems: "start",
          fontSize: fontSize,
          padding: "10px",
        }}
        // className="border-primary w-full justify-content-start"
        severity={"success"}
        // icon= { PrimeIcons.PLUS}
        content={content}
      ></Message>
    </div>
  );
};

// 특정 영역 주석용 폰트사이즈 작게
const SubText = ({ children }: { children: ReactNode }) => {
  // const [fontSize, setFontSize] = useState('1rem');
  // const contentStyle = {
  //     margin: '0',
  //     padding: '0',
  //   };
  // useEffect(() => {setFontSize('0.8rem');}, []);

  return (
    <div style={{ fontSize: "0.8rem" }}>
      <ul
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

// 수식에서 추가 설명용
const SCard = ({
  fontSize = "0.9rem",
  props,
  children,
}: {
  fontSize: string;
  props: CardProps;
  children: ReactNode;
}) => {
  const cardStyle = {
    fontSize,
    //  background: '#ffffff', // 배경
    border: "none", // 테두리 없음
    padding: "0",
  };

  const contentStyle = {
    margin: "0",
    padding: "0",
  };

  return (
    <Card {...props} style={cardStyle}>
      <div style={contentStyle}>
        <ul style={contentStyle}>{children}</ul>
      </div>
    </Card>
  );
};

// comment
const Cmt = ({
  fontSize = "0.9rem",
  props,
  children,
}: {
  fontSize: string;
  props: any;
  children: ReactNode;
}) => {
  // const { fontSize = "0.9rem" } = props;

  const divStyle = {
    fontSize,
    border: "none", // 테두리 없음
    padding: "0",
    fontWeight: "300",
  };

  const contentStyle = {
    margin: "0",
    padding: "0",
  };

  return (
    <div {...props} style={divStyle}>
      <ul style={contentStyle}>{children}</ul>
    </div>
  );
};

// default style 지정 이미지 : 가운데 정렬, 최대 사이즈 고정

const CenterImg = ({
  caption,
  children,
  width,
  ...rest
}: {
  caption: string;
  width?: string;
  // children : React.ReactNode;
  // imageStyle: { display: string; margin: string };
} & React.ComponentPropsWithoutRef<typeof Image>) => {
  const imageStyle = { display: "block", margin: "0 auto" };
  console.log("Image");
  console.log({ width });

  const width1 = width ? width : "600";
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Image src={props.src} width={width1} style={imageStyle} /> */}
      <Image width={width} style={imageStyle} {...rest} />
      {caption && <p>{caption}</p>}
    </div>
  );
};

const GofChip = ({ id }: { id: number }) => {
  const icon = "pi pi-question-circle";
  const removable = true;

  const selectedItem = checklist.find((s) => s.id == id);

  return (
    <Chip
      label={selectedItem ? selectedItem.desc : "aaa"}
      icon={icon}
      removable={removable}
    />
  );
};

const Cl = ({
  children,
  icon = "pi pi-question-circle",
  removable = true,
}: {
  children: ReactNode;
  icon: string;
  removable: boolean;
}) => {
  const selectedItem = checklist.find((s) => s.id == children);
  // console.log("selected ");
  // console.log(children);
  return (
    <Chip
      label={selectedItem ? selectedItem.desc : "bb"}
      icon={icon}
      removable={removable}
    />
  );
};

const GTooltip = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <>
      <Tooltip target=".tooltip-target" style={{ width: "400px" }} />
      <Button
        severity="warning"
        link
        label={label}
        className="tooltip-target !tw-py-0 !tw-px-1 tw-italic  tw-text-current tw-underline"
        data-pr-tooltip={desc}
        data-pr-position="left"
        data-pr-at="left bottom+2"
        data-pr-my="left top"
      />
    </>
  );
};

const GToast = ({ desc }: { desc: string }) => {
  const toast = useRef(null);
  const showSticky = () => {
    // toast.current?.show({
    //   severity: "info",
    //   summary: "Sticky",
    //   detail: { desc },
    //   sticky: true,
    // });
  };

  return (
    <div>
      <Toast ref={toast} />
      <Button onClick={showSticky} label="Sticky" />
    </div>
  );
};

export {
  Button,
  Accordion,
  AccordionTab,
  GAccordion,
  GAccordionTab,
  Card,
  Panel,
  TabView,
  TabPanel,
  OverlayPanel,
  DataTable,
  Column,
  Fieldset,
  Callout,
  M1,
  G2Col,
  GSheet,
  Math,
  Image,
  SubText,
  SCard,
  CenterImg,
  Chip,
  Cmt,
  GofH1,
  GofH2,
  GofListItem,
  GofChip,
  Cl,
  GTooltip,
  GToast,
};
