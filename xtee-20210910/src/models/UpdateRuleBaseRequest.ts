// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleBaseRequest extends $dara.Model {
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
   * 6843
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_arcehq4370
   */
  eventCode?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 备注
   */
  memo?: string;
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
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      eventCode: 'eventCode',
      memo: 'memo',
      regId: 'regId',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      eventCode: 'string',
      memo: 'string',
      regId: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

