// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSensitiveDefineRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the custom check rule. The value is in the JSON format. Valid values of keys:
   * 
   * *   **classKey**: the category keyword of the check rule.
   * *   **ruleList**: the keyword of the check rule.
   * 
   * @example
   * [{\\"classKey\\": \\"password\\", \\"ruleList\\": [\\"huaweicloud_ak\\", \\"ak_leak\\"]}]
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to enable the new ruled for automatic check only on agentless detection. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  enableNewRule?: number;
  /**
   * @remarks
   * The source of the check rules. Valid values:
   * 
   * *   **image**: image.
   * *   **agentless**: agentless detection.
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      enableNewRule: 'EnableNewRule',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      enableNewRule: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

