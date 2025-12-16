// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";
import { QuotaPageContentTypesValue } from "./QuotaPageContentTypesValue";
import { QuotaListItemsValue } from "./QuotaListItemsValue";


export class GetWafQuotaResponseBodyQuotaCaptcha extends $dara.Model {
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

export class GetWafQuotaResponseBodyQuotaList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the custom list is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * An object containing quota information for each type of item in the custom list.
   */
  items?: { [key: string]: QuotaListItemsValue };
  /**
   * @remarks
   * The number quota allowed per custom list.
   */
  numberItemsPerList?: WafQuotaInteger;
  /**
   * @remarks
   * The total number quota allowed for items in all custom lists.
   */
  numberItemsTotal?: WafQuotaInteger;
  /**
   * @remarks
   * The total number quota allowed for custom lists.
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
   * Indicates whether the WAF managed rules group is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The total number quota allowed for the WAF managed rules group.
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
   * An object containing quota information for each Content-Type in custom response pages.
   */
  contentTypes?: { [key: string]: QuotaPageContentTypesValue };
  /**
   * @remarks
   * Indicates whether the custom response page is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The total number quota allowed for custom response pages.
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
   * Indicates whether the scene protection feature is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The total number quota for scene protection rules.
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

export class GetWafQuotaResponseBodyQuota extends $dara.Model {
  captcha?: GetWafQuotaResponseBodyQuotaCaptcha;
  /**
   * @remarks
   * Quota information related to custom lists.
   */
  list?: GetWafQuotaResponseBodyQuotaList;
  /**
   * @remarks
   * Quota information related to the WAF managed rules group.
   */
  managedRulesGroup?: GetWafQuotaResponseBodyQuotaManagedRulesGroup;
  /**
   * @remarks
   * Quota information related to custom response pages.
   */
  page?: GetWafQuotaResponseBodyQuotaPage;
  /**
   * @remarks
   * Quota information related to scene protection.
   */
  scenePolicy?: GetWafQuotaResponseBodyQuotaScenePolicy;
  static names(): { [key: string]: string } {
    return {
      captcha: 'Captcha',
      list: 'List',
      managedRulesGroup: 'ManagedRulesGroup',
      page: 'Page',
      scenePolicy: 'ScenePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captcha: GetWafQuotaResponseBodyQuotaCaptcha,
      list: GetWafQuotaResponseBodyQuotaList,
      managedRulesGroup: GetWafQuotaResponseBodyQuotaManagedRulesGroup,
      page: GetWafQuotaResponseBodyQuotaPage,
      scenePolicy: GetWafQuotaResponseBodyQuotaScenePolicy,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWafQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned quota information.
   */
  quota?: GetWafQuotaResponseBodyQuota;
  /**
   * @remarks
   * Request ID.
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

