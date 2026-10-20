// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSliderCaptchaPageRequestConfigsEn extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the footer.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showFooter?: boolean;
  /**
   * @remarks
   * Specifies whether to display the request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showRequestId?: boolean;
  /**
   * @remarks
   * The color of the slider.
   * 
   * This parameter is required.
   * 
   * @example
   * #FFFFFF
   */
  sliderColor?: string;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      showFooter: 'ShowFooter',
      showRequestId: 'ShowRequestId',
      sliderColor: 'SliderColor',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showFooter: 'boolean',
      showRequestId: 'boolean',
      sliderColor: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSliderCaptchaPageRequestConfigsZh extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the footer.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  showFooter?: boolean;
  /**
   * @remarks
   * Specifies whether to display the request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  showRequestId?: boolean;
  /**
   * @remarks
   * The color of the slider.
   * 
   * This parameter is required.
   * 
   * @example
   * #FFFFFF
   */
  sliderColor?: string;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      showFooter: 'ShowFooter',
      showRequestId: 'ShowRequestId',
      sliderColor: 'SliderColor',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showFooter: 'boolean',
      showRequestId: 'boolean',
      sliderColor: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSliderCaptchaPageRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The predefined English style.
   */
  en?: UpdateSliderCaptchaPageRequestConfigsEn;
  /**
   * @remarks
   * The predefined Chinese style.
   */
  zh?: UpdateSliderCaptchaPageRequestConfigsZh;
  static names(): { [key: string]: string } {
    return {
      en: 'En',
      zh: 'Zh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      en: UpdateSliderCaptchaPageRequestConfigsEn,
      zh: UpdateSliderCaptchaPageRequestConfigsZh,
    };
  }

  validate() {
    if(this.en && typeof (this.en as any).validate === 'function') {
      (this.en as any).validate();
    }
    if(this.zh && typeof (this.zh as any).validate === 'function') {
      (this.zh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSliderCaptchaPageRequest extends $dara.Model {
  /**
   * @remarks
   * The predefined configurations of the custom slider page.
   */
  configs?: UpdateSliderCaptchaPageRequestConfigs;
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
  siteIds?: number[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      customContent: 'CustomContent',
      forceLanguage: 'ForceLanguage',
      id: 'Id',
      name: 'Name',
      siteIds: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: UpdateSliderCaptchaPageRequestConfigs,
      customContent: 'string',
      forceLanguage: 'string',
      id: 'number',
      name: 'string',
      siteIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    if(Array.isArray(this.siteIds)) {
      $dara.Model.validateArray(this.siteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

