// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the custom privacy policy item.
   * 
   * @example
   * Item Name
   */
  customPrivacyPolicyItemName?: string;
  /**
   * @remarks
   * The endpoint of the custom privacy policy item. The value must start with https\\://.
   * 
   * @example
   * https://example.com
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

export class UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents extends $dara.Model {
  /**
   * @remarks
   * The items of the custom privacy policy.
   */
  customPrivacyPolicyItems?: UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems[];
  /**
   * @remarks
   * The prompt for the custom privacy policy content.
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
      customPrivacyPolicyItems: { 'type': 'array', 'itemType': UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContentsCustomPrivacyPolicyItems },
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

export class UpdateCustomPrivacyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the custom privacy policy content.
   */
  customPrivacyPolicyContents?: UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents[];
  /**
   * @remarks
   * The ID of the custom privacy policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pp_neagxpoznsjdtxxxxx
   */
  customPrivacyPolicyId?: string;
  /**
   * @remarks
   * The name of the custom privacy policy.
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyName?: string;
  /**
   * @remarks
   * The default language of the policy. The value is the LanguageCode returned by the ListLanguages operation.
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
   * The consent type for the custom privacy policy.
   * 
   * @example
   * implied_consent
   */
  userConsentType?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyContents: 'CustomPrivacyPolicyContents',
      customPrivacyPolicyId: 'CustomPrivacyPolicyId',
      customPrivacyPolicyName: 'CustomPrivacyPolicyName',
      defaultLanguageCode: 'DefaultLanguageCode',
      instanceId: 'InstanceId',
      userConsentType: 'UserConsentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyContents: { 'type': 'array', 'itemType': UpdateCustomPrivacyPolicyRequestCustomPrivacyPolicyContents },
      customPrivacyPolicyId: 'string',
      customPrivacyPolicyName: 'string',
      defaultLanguageCode: 'string',
      instanceId: 'string',
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

