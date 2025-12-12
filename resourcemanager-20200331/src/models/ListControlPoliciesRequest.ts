// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the descriptions of the access control policies. Valid values:
   * 
   * - zh-CN (default value): Chinese
   * - en: English
   * - ja: Japanese
   * 
   * >  This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The number of the page to return. 
   * 
   * Page start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. 
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * - System: system access control policy
   * - Custom: custom access control policy
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

