// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the description of the access control policy. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

