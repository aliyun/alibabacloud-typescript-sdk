// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the control policy description is returned. Valid values:
   * 
   * - zh-CN (default): Chinese.
   * - en: English.
   * - ja: Japanese.
   * 
   * > This parameter is valid only for system control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the control policy.
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

