// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleVersionListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 6851
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 101804
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      regId: 'regId',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

