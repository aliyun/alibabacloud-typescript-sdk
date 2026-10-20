// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSliderCaptchaPageRequestConfigsEn extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to show the footer.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  showFooter?: boolean;
  /**
   * @remarks
   * Specifies whether to show the request ID.
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

export class CreateSliderCaptchaPageRequestConfigsZh extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to show the footer.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  showFooter?: boolean;
  /**
   * @remarks
   * Specifies whether to show the request ID.
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

export class CreateSliderCaptchaPageRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The predefined English style.
   */
  en?: CreateSliderCaptchaPageRequestConfigsEn;
  /**
   * @remarks
   * The predefined Chinese style.
   */
  zh?: CreateSliderCaptchaPageRequestConfigsZh;
  static names(): { [key: string]: string } {
    return {
      en: 'En',
      zh: 'Zh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      en: CreateSliderCaptchaPageRequestConfigsEn,
      zh: CreateSliderCaptchaPageRequestConfigsZh,
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

export class CreateSliderCaptchaPageRequest extends $dara.Model {
  /**
   * @remarks
   * The predefined configurations for the custom slider page.
   */
  configs?: CreateSliderCaptchaPageRequestConfigs;
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
  siteIds?: number[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      customContent: 'CustomContent',
      forceLanguage: 'ForceLanguage',
      name: 'Name',
      siteIds: 'SiteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: CreateSliderCaptchaPageRequestConfigs,
      customContent: 'string',
      forceLanguage: 'string',
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

