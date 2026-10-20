// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSliderCaptchaPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The predefined configurations of the custom slider page.
   */
  configsShrink?: string;
  /**
   * @remarks
   * The custom slider configuration.
   * 
   * @example
   * [{"language":"ko","description":"더 나은 경험을 위해 웹 페이지에 접속하기 전에 슬라이드하여 인증을 완료해 주세요.","captcha_color":"#28870d","show_trace_id":true,"show_footer":true,"mandatory_lang":false}]
   */
  customContent?: string;
  /**
   * @remarks
   * The forced language.
   * 
   * @example
   * zh
   */
  forceLanguage?: string;
  /**
   * @remarks
   * The ID of the custom slider page.
   * 
   * This parameter is required.
   * 
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom slider page.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The list of bound site IDs.
   */
  siteIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      customContent: 'CustomContent',
      forceLanguage: 'ForceLanguage',
      id: 'Id',
      name: 'Name',
      siteIdsShrink: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      customContent: 'string',
      forceLanguage: 'string',
      id: 'number',
      name: 'string',
      siteIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

