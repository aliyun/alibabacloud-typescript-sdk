// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";
import { QuotaPageContentTypesValue } from "./QuotaPageContentTypesValue";
import { QuotaListItemsValue } from "./QuotaListItemsValue";


export class GetWafQuotaResponseBodyQuotaCaptcha extends $dara.Model {
  /**
   * @remarks
   * Whether captcha rules are enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of captcha rules allowed.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaList extends $dara.Model {
  /**
   * @remarks
   * Whether the custom list feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The quota for each item type in a custom list.
   */
  items?: { [key: string]: QuotaListItemsValue };
  /**
   * @remarks
   * The maximum number of items allowed per custom list.
   */
  numberItemsPerList?: WafQuotaInteger;
  /**
   * @remarks
   * The maximum number of items allowed across all custom lists.
   */
  numberItemsTotal?: WafQuotaInteger;
  /**
   * @remarks
   * The maximum number of custom lists allowed.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      items: 'Items',
      numberItemsPerList: 'NumberItemsPerList',
      numberItemsTotal: 'NumberItemsTotal',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      items: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaListItemsValue },
      numberItemsPerList: WafQuotaInteger,
      numberItemsTotal: WafQuotaInteger,
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.items) {
      $dara.Model.validateMap(this.items);
    }
    if(this.numberItemsPerList && typeof (this.numberItemsPerList as any).validate === 'function') {
      (this.numberItemsPerList as any).validate();
    }
    if(this.numberItemsTotal && typeof (this.numberItemsTotal as any).validate === 'function') {
      (this.numberItemsTotal as any).validate();
    }
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaManagedRulesGroup extends $dara.Model {
  /**
   * @remarks
   * Whether the WAF managed rule group feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of WAF managed rule groups allowed.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaPage extends $dara.Model {
  /**
   * @remarks
   * The quota for each Content-Type in a custom response page.
   */
  contentTypes?: { [key: string]: QuotaPageContentTypesValue };
  /**
   * @remarks
   * Whether the custom response page feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of custom response pages allowed.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      contentTypes: 'ContentTypes',
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTypes: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaPageContentTypesValue },
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.contentTypes) {
      $dara.Model.validateMap(this.contentTypes);
    }
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaScenePolicy extends $dara.Model {
  /**
   * @remarks
   * Whether the scenario protection feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The maximum number of scenario protection rules allowed.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuotaSliderCaptchaPage extends $dara.Model {
  /**
   * @remarks
   * Whether slider captcha pages are enabled.
   */
  enable?: boolean;
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBodyQuota extends $dara.Model {
  /**
   * @remarks
   * The quota for captcha rules.
   */
  captcha?: GetWafQuotaResponseBodyQuotaCaptcha;
  /**
   * @remarks
   * The quota for custom lists.
   */
  list?: GetWafQuotaResponseBodyQuotaList;
  /**
   * @remarks
   * The quota for WAF managed rule groups.
   */
  managedRulesGroup?: GetWafQuotaResponseBodyQuotaManagedRulesGroup;
  /**
   * @remarks
   * The quota for custom response pages.
   */
  page?: GetWafQuotaResponseBodyQuotaPage;
  /**
   * @remarks
   * The quota for scenario protection.
   */
  scenePolicy?: GetWafQuotaResponseBodyQuotaScenePolicy;
  /**
   * @remarks
   * The quota for slider captcha pages.
   */
  sliderCaptchaPage?: GetWafQuotaResponseBodyQuotaSliderCaptchaPage;
  static names(): { [key: string]: string } {
    return {
      captcha: 'Captcha',
      list: 'List',
      managedRulesGroup: 'ManagedRulesGroup',
      page: 'Page',
      scenePolicy: 'ScenePolicy',
      sliderCaptchaPage: 'SliderCaptchaPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captcha: GetWafQuotaResponseBodyQuotaCaptcha,
      list: GetWafQuotaResponseBodyQuotaList,
      managedRulesGroup: GetWafQuotaResponseBodyQuotaManagedRulesGroup,
      page: GetWafQuotaResponseBodyQuotaPage,
      scenePolicy: GetWafQuotaResponseBodyQuotaScenePolicy,
      sliderCaptchaPage: GetWafQuotaResponseBodyQuotaSliderCaptchaPage,
    };
  }

  validate() {
    if(this.captcha && typeof (this.captcha as any).validate === 'function') {
      (this.captcha as any).validate();
    }
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    if(this.managedRulesGroup && typeof (this.managedRulesGroup as any).validate === 'function') {
      (this.managedRulesGroup as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(this.scenePolicy && typeof (this.scenePolicy as any).validate === 'function') {
      (this.scenePolicy as any).validate();
    }
    if(this.sliderCaptchaPage && typeof (this.sliderCaptchaPage as any).validate === 'function') {
      (this.sliderCaptchaPage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota details.
   */
  quota?: GetWafQuotaResponseBodyQuota;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetWafQuotaResponseBodyQuota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

