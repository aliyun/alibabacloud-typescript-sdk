// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneRulePageListRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages. Default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NOMAL
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
   * Event code
   * 
   * @example
   * de_ahgctb7098
   */
  eventCode?: string;
  /**
   * @remarks
   * Number of items per page in the returned results. Default value: 20, minimum value: 1, maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Strategy type
   * 
   * @example
   * CUSTMER
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Strategy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Strategy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

