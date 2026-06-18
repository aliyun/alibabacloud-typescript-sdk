// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserWafRulesetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the WAF ruleset.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The expression of the WAF ruleset.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The WAF ruleset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the WAF ruleset.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The position of the WAF ruleset.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * A list of rule configurations in the WAF ruleset.
   * 
   * @example
   * [
   *   {
   *     "Id": 20000001,
   *     "Name": "rule1",
   *     "Expression": "ip.src eq 1.1.1.1",
   *     "Action": "deny"
   *   }
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The shared configuration of the WAF ruleset.
   */
  sharedShrink?: string;
  /**
   * @remarks
   * The status of the WAF ruleset.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      position: 'Position',
      rulesShrink: 'Rules',
      sharedShrink: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      id: 'number',
      instanceId: 'string',
      name: 'string',
      position: 'number',
      rulesShrink: 'string',
      sharedShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

