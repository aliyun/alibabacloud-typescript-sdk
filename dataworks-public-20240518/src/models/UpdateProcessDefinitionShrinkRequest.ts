// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of approval nodes. This parameter does not apply to system policies.
   */
  approvalNodesShrink?: string;
  /**
   * @remarks
   * An idempotent parameter. It ensures that retried requests do not result in duplicate operations.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the process definition.
   * 
   * @example
   * lwt_ide_simple 项目 MaxCompute 表审批策略
   */
  description?: string;
  /**
   * @remarks
   * The ID of the process definition.
   * 
   * This parameter is required.
   * 
   * @example
   * 177554881536128
   */
  id?: string;
  /**
   * @remarks
   * The name of the process definition.
   * 
   * @example
   * MaxCompute 表审批
   */
  name?: string;
  /**
   * @remarks
   * The notification service configurations.
   */
  notificationServicesShrink?: string;
  /**
   * @remarks
   * A list of rule conditions. This parameter does not apply to system policies.
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

