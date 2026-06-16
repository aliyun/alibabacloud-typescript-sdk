// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
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
   * 7088
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_afghcf6411
   */
  eventCode?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The output action of the policy.
   * 
   * @example
   * [{\\"inputs\\":[\\"auto_accselist\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * The expression.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"expressionName\\":\\"设备token不为空\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"deviceToken\\"},\\"operatorCode\\":\\"isNotEmptyWrapper\\",\\"operatorName\\":\\"不为空\\"}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
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

