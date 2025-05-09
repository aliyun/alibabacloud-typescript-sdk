// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesensitizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the masking algorithm.
   * 
   * @example
   * MD5
   */
  funcType?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the masking rule.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the masking rule.
   * 
   * @example
   * default desensitization rule test
   */
  ruleName?: string;
  /**
   * @remarks
   * The algorithm used for masking.
   * 
   * @example
   * HASH
   */
  ruleType?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      funcType: 'FuncType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleType: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

