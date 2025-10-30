// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems extends $dara.Model {
  /**
   * @remarks
   * 自定义条款名称
   * 
   * @example
   * xxxx隐私政策条款
   */
  customPrivacyPolicyItemName?: string;
  /**
   * @remarks
   * 自定义条款访问地址
   * 
   * @example
   * http://www.xxxx.com
   */
  customPrivacyPolicyItemUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyItemName: 'CustomPrivacyPolicyItemName',
      customPrivacyPolicyItemUrl: 'CustomPrivacyPolicyItemUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyItemName: 'string',
      customPrivacyPolicyItemUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents extends $dara.Model {
  /**
   * @remarks
   * 自定义条款项
   */
  customPrivacyPolicyItems?: CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems[];
  /**
   * @remarks
   * 自定义条款提示
   * 
   * @example
   * 登录视为同意此条款
   */
  customPrivacyPolicyTip?: string;
  /**
   * @remarks
   * 自定义条款所属语言
   * 
   * @example
   * zh-Hans-CN
   */
  languageCode?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyItems: 'CustomPrivacyPolicyItems',
      customPrivacyPolicyTip: 'CustomPrivacyPolicyTip',
      languageCode: 'LanguageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyItems: { 'type': 'array', 'itemType': CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems },
      customPrivacyPolicyTip: 'string',
      languageCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPrivacyPolicyItems)) {
      $dara.Model.validateArray(this.customPrivacyPolicyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomPrivacyPolicyRequest extends $dara.Model {
  /**
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 自定义条款内容详情
   */
  customPrivacyPolicyContents?: CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents[];
  /**
   * @remarks
   * 自定义条款名称
   * 
   * This parameter is required.
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyName?: string;
  /**
   * @remarks
   * 默认条款语言，若其他语言未配置条款，则使用默认的
   * 
   * @example
   * zh-Hans-CN
   */
  defaultLanguageCode?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 自定义条款状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 手动勾选同意，还是默认同意
   * 
   * @example
   * implied_consent
   */
  userConsentType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      customPrivacyPolicyContents: 'CustomPrivacyPolicyContents',
      customPrivacyPolicyName: 'CustomPrivacyPolicyName',
      defaultLanguageCode: 'DefaultLanguageCode',
      instanceId: 'InstanceId',
      status: 'Status',
      userConsentType: 'UserConsentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      customPrivacyPolicyContents: { 'type': 'array', 'itemType': CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents },
      customPrivacyPolicyName: 'string',
      defaultLanguageCode: 'string',
      instanceId: 'string',
      status: 'string',
      userConsentType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPrivacyPolicyContents)) {
      $dara.Model.validateArray(this.customPrivacyPolicyContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

