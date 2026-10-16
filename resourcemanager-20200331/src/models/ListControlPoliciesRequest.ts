// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the description of the control policy to be returned. Valid values:
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
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the control policy. Valid values:
   * 
   * - System: system control policy.
   * - Custom: custom control policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

