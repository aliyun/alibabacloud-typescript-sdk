// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the custom privacy policy item.
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyItemName?: string;
  /**
   * @remarks
   * The endpoint of the custom privacy policy item.
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
   * The items of the custom privacy policy.
   */
  customPrivacyPolicyItems?: CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems[];
  /**
   * @remarks
   * The prompt for the custom privacy policy.
   * 
   * @example
   * Please read and agree：
   */
  customPrivacyPolicyTip?: string;
  /**
   * @remarks
   * The language of the custom privacy policy. The value is the LanguageCode returned by the ListLanguages operation.
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
   * @remarks
   * A client token used to ensure the idempotence of the request. The client generates this value to make sure that it is unique among different requests. The value can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The details of the custom privacy policy content.
   */
  customPrivacyPolicyContents?: CreateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents[];
  /**
   * @remarks
   * The name of the custom privacy policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyName?: string;
  /**
   * @remarks
   * The default language of the privacy policy.
   * 
   * @example
   * zh-Hans-CN
   */
  defaultLanguageCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the custom privacy policy.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The consent type for the privacy policy.
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

