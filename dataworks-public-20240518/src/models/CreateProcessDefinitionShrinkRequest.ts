// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of approval nodes.
   * 
   * This parameter is required.
   */
  approvalNodesShrink?: string;
  /**
   * @remarks
   * The idempotency token. We recommend that you use a UUID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the process definition.
   * 
   * This parameter is required.
   * 
   * @example
   * 这是一个示例策略
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the process definition.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the process definition.
   * 
   * This parameter is required.
   * 
   * @example
   * 我的审批策略
   */
  name?: string;
  /**
   * @remarks
   * The notification service declarations.
   */
  notificationServicesShrink?: string;
  /**
   * @remarks
   * The list of condition rules.
   * 
   * This parameter is required.
   */
  ruleConditionsShrink?: string;
  /**
   * @remarks
   * The subtype. Valid values:
   * 
   * - Table
   * - Column
   * - Database
   * - Schema
   * - Default
   * 
   * @example
   * Table
   */
  subType?: string;
  /**
   * @remarks
   * The type of the process definition. Valid values:
   * 
   * 1. MaxCompute
   * 2. DataService
   * 3. Extension
   * 4. Hologres
   * 
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

