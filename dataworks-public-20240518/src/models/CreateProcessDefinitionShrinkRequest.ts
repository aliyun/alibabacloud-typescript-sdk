// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  approvalNodesShrink?: string;
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  notificationServicesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleConditionsShrink?: string;
  /**
   * @example
   * Table
   */
  subType?: string;
  /**
   * @example
   * Extension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalNodesShrink: 'ApprovalNodes',
      clientToken: 'ClientToken',
      description: 'Description',
      enabled: 'Enabled',
      name: 'Name',
      notificationServicesShrink: 'NotificationServices',
      ruleConditionsShrink: 'RuleConditions',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodesShrink: 'string',
      clientToken: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      notificationServicesShrink: 'string',
      ruleConditionsShrink: 'string',
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

