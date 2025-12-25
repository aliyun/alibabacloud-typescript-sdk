// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWafRulesetShrinkRequest extends $dara.Model {
  /**
   * @example
   * this is a test ruleset.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  rulesShrink?: string;
  sharedShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      instanceId: 'InstanceId',
      name: 'Name',
      phase: 'Phase',
      rulesShrink: 'Rules',
      sharedShrink: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      instanceId: 'string',
      name: 'string',
      phase: 'string',
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

