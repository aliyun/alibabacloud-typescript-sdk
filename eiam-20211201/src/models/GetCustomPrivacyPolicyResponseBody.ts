// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContentsCustomPrivacyPolicyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the custom privacy policy item.
   * 
   * @example
   * item name
   */
  customPrivacyPolicyItemName?: string;
  /**
   * @remarks
   * The URL of the custom privacy policy item. The URL must start with https\\://.
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

export class GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContents extends $dara.Model {
  /**
   * @remarks
   * The items of the custom privacy policy.
   */
  customPrivacyPolicyItems?: GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContentsCustomPrivacyPolicyItems[];
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
      customPrivacyPolicyItems: { 'type': 'array', 'itemType': GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContentsCustomPrivacyPolicyItems },
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

export class GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicy extends $dara.Model {
  /**
   * @remarks
   * The details of the custom privacy policy content.
   */
  customPrivacyPolicyContents?: GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContents[];
  /**
   * @remarks
   * The ID of the custom privacy policy.
   * 
   * @example
   * pp_xxxxx
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
   * The language of the custom privacy policy. The value is the LanguageCode returned by the ListLanguages operation.
   * 
   * @example
   * zh-Hans-CN
   */
  defaultLanguageCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The valid values for the account status are:
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Agreement Type.
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
      status: 'Status',
      userConsentType: 'UserConsentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyContents: { 'type': 'array', 'itemType': GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicyCustomPrivacyPolicyContents },
      customPrivacyPolicyId: 'string',
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

export class GetCustomPrivacyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom privacy policy.
   */
  customPrivacyPolicy?: GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicy: 'CustomPrivacyPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicy: GetCustomPrivacyPolicyResponseBodyCustomPrivacyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customPrivacyPolicy && typeof (this.customPrivacyPolicy as any).validate === 'function') {
      (this.customPrivacyPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

