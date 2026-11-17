// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSliderCaptchaPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The predefined configurations for the custom slider page.
   */
  configsShrink?: string;
  /**
   * @remarks
   * The custom slider configurations. The value is a JSON string.
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
   * The name of the custom slider page.
   * 
   * This parameter is required.
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
      name: 'Name',
      siteIdsShrink: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      customContent: 'string',
      forceLanguage: 'string',
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

