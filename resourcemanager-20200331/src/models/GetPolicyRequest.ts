// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language type. The description of the system access policy is returned in this language. Valid values:
   * 
   * - en: English.
   * - zh-CN: Chinese.
   * - ja: Japanese.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * Policy Name of the access policy.
   * 
   * Policy Name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * - Custom: custom policy.
   * - System: system policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

