import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SuccessPage.module.css";

export function SuccessPage({
  as: _Component = _Builtin.Block,
  openWalletButtonRuntimeProps = {},
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
        <_Builtin.Heading className={_utils.cx(_styles, "heading-2")} tag="h1">
          {"Thank you! We're sending your NFT to your DropChain Wallet"}
          <_Builtin.Link
            className={_utils.cx(_styles, "link")}
            button={false}
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
              {""}
            </_Builtin.Span>
          </_Builtin.Link>
        </_Builtin.Heading>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "html-embed")}
          value="%3Cscript%20src%3D%22https%3A%2F%2Fcdn.lordicon.com%2Flordicon.js%22%3E%3C%2Fscript%3E%0A%3Clord-icon%0A%20%20%20%20src%3D%22https%3A%2F%2Fcdn.lordicon.com%2Fdgpphngr.json%22%0A%20%20%20%20trigger%3D%22loop%22%0A%20%20%20%20delay%3D%221000%22%0A%20%20%20%20colors%3D%22primary%3A%23ffffff%2Csecondary%3A%2301f089%22%0A%20%20%20%20style%3D%22width%3A150px%3Bheight%3A150px%22%3E%0A%3C%2Flord-icon%3E"
        />
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          options={{
            href: "https://wallet.dropchain.network/",
          }}
          {...openWalletButtonRuntimeProps}
        >
          {"Open Wallet and See Your NFT"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
