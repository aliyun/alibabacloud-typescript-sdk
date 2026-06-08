// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionShrinkRequest extends $dara.Model {
  approvalNodesShrink?: string;
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 177554881536128
   */
  id?: string;
  name?: string;
  notificationServicesShrink?: string;
  ruleConditionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalNodesShrink: 'ApprovalNodes',
      clientToken: 'ClientToken',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      notificationServicesShrink: 'NotificationServices',
      ruleConditionsShrink: 'RuleConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodesShrink: 'string',
      clientToken: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      notificationServicesShrink: 'string',
      ruleConditionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

