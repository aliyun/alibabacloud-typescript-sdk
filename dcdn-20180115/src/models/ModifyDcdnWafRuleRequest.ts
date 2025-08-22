// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDcdnWafRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The new configurations of the protection rule.
   * 
   * > After you modify the configurations of the protection rule, the previous configurations are overwritten.
   * 
   * @example
   * {\\"origin\\":\\"custom\\",\\"conditions\\":[{\\"opValue\\":\\"eq\\",\\"key\\":\\"URL\\",\\"values\\":\\"/example\\"},{\\"opValue\\":\\"eq\\",\\"key\\":\\"Header\\",\\"values\\":\\"3333\\",\\"subKey\\":\\"trt\\"}],\\"actionExternal\\":{},\\"action\\":\\"monitor\\",\\"ccStatus\\":1,\\"ratelimit\\":{\\"target\\":\\"remote_addr\\",\\"interval\\":\\"5\\",\\"threshold\\":\\"2\\",\\"effect\\":\\"rule\\",\\"status\\":{\\"code\\":\\"404\\",\\"count\\":\\"2\\"},\\"ttl\\":\\"1800\\"}}\\"
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The ID of the protection rule. You can specify only one ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 200001
   */
  ruleId?: number;
  /**
   * @remarks
   * The new name of the protection rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The new status of the protection rule. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * off
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ruleConfig: 'RuleConfig',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConfig: 'string',
      ruleId: 'number',
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

