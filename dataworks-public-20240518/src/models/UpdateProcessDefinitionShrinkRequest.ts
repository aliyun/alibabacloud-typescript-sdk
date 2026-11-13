// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of approval nodes. Note: System policies do not take effect.
   */
  approvalNodesShrink?: string;
  /**
   * @remarks
   * The idempotency token. Used to prevent duplicate operations caused by multiple calls.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the approval process definition.
   * 
   * @example
   * Approval policy for MaxCompute tables in the lwt_ide_simple project
   */
  description?: string;
  /**
   * @remarks
   * The ID of the approval process definition.
   * 
   * This parameter is required.
   * 
   * @example
   * 177554881536128
   */
  id?: string;
  /**
   * @remarks
   * The name of the approval process definition.
   * 
   * @example
   * MaxCompute table approval
   */
  name?: string;
  /**
   * @remarks
   * The notification service declaration.
   */
  notificationServicesShrink?: string;
  /**
   * @remarks
   * The list of conditional rules. Note: System policies do not take effect.
   */
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

