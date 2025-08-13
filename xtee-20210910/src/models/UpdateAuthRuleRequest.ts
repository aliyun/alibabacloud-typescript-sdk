// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthRuleRequest extends $dara.Model {
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
   * Policy primary key ID
   * 
   * @example
   * 7088
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_afghcf6411
   */
  eventCode?: string;
  /**
   * @remarks
   * Region code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Policy output action
   * 
   * @example
   * [{\\"inputs\\":[\\"auto_accselist\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Expression
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"expressionName\\":\\"设备token不为空\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"deviceToken\\"},\\"operatorCode\\":\\"isNotEmptyWrapper\\",\\"operatorName\\":\\"不为空\\"}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy version primary key ID
   * 
   * @example
   * 5190
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      eventCode: 'eventCode',
      regId: 'regId',
      ruleActions: 'ruleActions',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleVersionId: 'ruleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      eventCode: 'string',
      regId: 'string',
      ruleActions: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

