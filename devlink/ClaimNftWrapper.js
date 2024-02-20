import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ClaimNftWrapper.module.css";

export function ClaimNftWrapper({
  as: _Component = _Builtin.Block,
  claimNftButtonRuntimeProps = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-2")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/656cfccb2321a8598c51014a/656e31a68c1f48c5f2cedb3b_63caacd6b1dce74e0e4029ff_DropChain%20Green%20(1).svg"
      />
      <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {"Claim Your Free NFT From "}
          <_Builtin.Link
            className={_utils.cx(_styles, "link")}
            button={false}
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
              {"DropChain"}
            </_Builtin.Span>
          </_Builtin.Link>
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
          {
            "The DropChain API empowers anyone to build a user friendly web3 app with code or no-code. "
          }
          <_Builtin.Link
            className={_utils.cx(_styles, "link-2")}
            button={false}
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
              {"Start for free."}
            </_Builtin.Span>
          </_Builtin.Link>
        </_Builtin.Paragraph>
        <_Builtin.Image
          className={_utils.cx(_styles, "image-2")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/656cfccb2321a8598c51014a/656e8f8cf15d48f82316500c_Frame%201.jpg"
        />
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          options={{
            href: "https://wallet.dropchain.network/",
          }}
          {...claimNftButtonRuntimeProps}
        >
          {"Claim NFT"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
