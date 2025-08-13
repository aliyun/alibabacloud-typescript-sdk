// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulePageListRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and responses, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_asssce8122
   */
  eventCode?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Policy type.
   * 
   * @example
   * NOMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * 营销风险识别评分
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Sorting method, default value is desc.
   * - desc: descending order
   * - asc: ascending order
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

