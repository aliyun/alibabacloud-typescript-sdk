// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserWafRulesetShrinkRequest extends $dara.Model {
  /**
   * @example
   * example
   */
  description?: string;
  /**
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
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
  sharedShrink?: string;
  /**
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

