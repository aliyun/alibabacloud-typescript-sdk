// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomSideLinkConfig } from "./CustomSideLinkConfig";
import { WxTrustedDomainConfig } from "./WxTrustedDomainConfig";


export class DomainSeniorConfig extends $dara.Model {
  clientDownloadEnable?: boolean;
  cspFrameAncestors?: string;
  customLoginAppid?: string;
  customLoginUrl?: string;
  customLogoutUrl?: string;
  customSideLinkList?: CustomSideLinkConfig[];
  homePageBgImageUrl?: string;
  homePageFooter?: string;
  homePageFooter2?: string;
  homePageSlogan?: string;
  refererEnable?: boolean;
  wxTxtList?: WxTrustedDomainConfig;
  static names(): { [key: string]: string } {
    return {
      clientDownloadEnable: 'client_download_enable',
      cspFrameAncestors: 'csp_frame_ancestors',
      customLoginAppid: 'custom_login_appid',
      customLoginUrl: 'custom_login_url',
      customLogoutUrl: 'custom_logout_url',
      customSideLinkList: 'custom_side_link_list',
      homePageBgImageUrl: 'home_page_bg_image_url',
      homePageFooter: 'home_page_footer',
      homePageFooter2: 'home_page_footer2',
      homePageSlogan: 'home_page_slogan',
      refererEnable: 'referer_enable',
      wxTxtList: 'wx_txt_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientDownloadEnable: 'boolean',
      cspFrameAncestors: 'string',
      customLoginAppid: 'string',
      customLoginUrl: 'string',
      customLogoutUrl: 'string',
      customSideLinkList: { 'type': 'array', 'itemType': CustomSideLinkConfig },
      homePageBgImageUrl: 'string',
      homePageFooter: 'string',
      homePageFooter2: 'string',
      homePageSlogan: 'string',
      refererEnable: 'boolean',
      wxTxtList: WxTrustedDomainConfig,
    };
  }

  validate() {
    if(Array.isArray(this.customSideLinkList)) {
      $dara.Model.validateArray(this.customSideLinkList);
    }
    if(this.wxTxtList && typeof (this.wxTxtList as any).validate === 'function') {
      (this.wxTxtList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

