// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepCopyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Newly added cumulative variable
   * 
   * @example
   * [{"id":"1288","title":"新标题"}]
   */
  custInsertInfo?: string;
  /**
   * @remarks
   * Read cumulative variable
   * 
   * @example
   * [1234，2345]
   */
  custWriteInfo?: string;
  /**
   * @remarks
   * Custom variables to be added
   * 
   * @example
   * [{"id":"ex_2wxZPcxg3a03","title":"新标题"}]
   */
  expressionVariableInfo?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Custom query variables to be added
   * 
   * @example
   * [{"id":"ex_2wxZPcxg3a03","title":"新标题"}]
   */
  queryExpressionVariableInfo?: string;
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
   * Source policy ID
   * 
   * @example
   * 102125
   */
  sourceRuleId?: string;
  /**
   * @remarks
   * Target policy ID
   * 
   * @example
   * 102125,102129
   */
  sourceRuleIds?: string;
  /**
   * @remarks
   * Target event
   * 
   * @example
   * de_ajtshf1581
   */
  targetEventCode?: string;
  /**
   * @remarks
   * Target event name
   * 
   * @example
   * 目标事件名称
   */
  targetEventName?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'CreateType',
      custInsertInfo: 'CustInsertInfo',
      custWriteInfo: 'CustWriteInfo',
      expressionVariableInfo: 'ExpressionVariableInfo',
      lang: 'Lang',
      queryExpressionVariableInfo: 'QueryExpressionVariableInfo',
      regId: 'RegId',
      sourceRuleId: 'SourceRuleId',
      sourceRuleIds: 'SourceRuleIds',
      targetEventCode: 'TargetEventCode',
      targetEventName: 'TargetEventName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'string',
      custInsertInfo: 'string',
      custWriteInfo: 'string',
      expressionVariableInfo: 'string',
      lang: 'string',
      queryExpressionVariableInfo: 'string',
      regId: 'string',
      sourceRuleId: 'string',
      sourceRuleIds: 'string',
      targetEventCode: 'string',
      targetEventName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

