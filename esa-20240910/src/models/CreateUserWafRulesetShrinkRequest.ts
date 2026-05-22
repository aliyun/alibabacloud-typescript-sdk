// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWafRulesetShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phase?: string;
  rulesShrink?: string;
  sharedShrink?: string;
  /**
   * @remarks
   * This parameter is required.
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

