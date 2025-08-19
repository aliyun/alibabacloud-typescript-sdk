// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPoliciesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the descriptions of the access control policies. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is available only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Page starts from page 1. Default value: 1.
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
   * The type of the access control policies. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListControlPoliciesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
      tag: { 'type': 'array', 'itemType': ListControlPoliciesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

