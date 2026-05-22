// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserWafRulesetShrinkRequest extends $dara.Model {
  description?: string;
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  name?: string;
  position?: number;
  rulesShrink?: string;
  sharedShrink?: string;
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

