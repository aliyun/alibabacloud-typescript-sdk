// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulePageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_asssce8122
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
   * The policy type.
   * 
   * @example
   * NOMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别评分
   */
  ruleName?: string;
  /**
   * @remarks
   * The policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The sort order. Default value: desc.
   * - desc: descending order
   * - asc: ascending order.
   * 
   * @example
   * asc
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      currentPage: 'currentPage',
      eventCode: 'eventCode',
      pageSize: 'pageSize',
      regId: 'regId',
      ruleAuthType: 'ruleAuthType',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      currentPage: 'string',
      eventCode: 'string',
      pageSize: 'string',
      regId: 'string',
      ruleAuthType: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

