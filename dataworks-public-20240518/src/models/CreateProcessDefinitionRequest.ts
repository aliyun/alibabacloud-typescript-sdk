// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * The approver type for the node. Valid values:
   * - DataWorksProjectRole: workspace role
   * - DataWorksProjectMember: workspace member
   * - TableAdministrator: table owner
   * - TableOrProjectAdministrator: table or workspace administrator
   * - AliyunResourceOwner: Alibaba Cloud account
   * - MaxComputeRole: MaxCompute administrator
   * - DLFAdmin: DLF legacy administrator
   * - DLFNextAdmin: DLFNext administrator
   * - TenantRole: tenant role
   * - EmrAdministrator: EMR administrator
   * - LindormAdministrator: Lindorm administrator
   * - AliyunRamUser: RAM user
   * 
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  /**
   * @remarks
   * The assignees. The semantics vary based on the value of AccountType:
   * - DataWorksProjectMember: specifies the user ID of the workspace member.
   * - DataWorksProjectRole: specifies the code of the workspace role. If a custom workspace role is required, set this parameter to "custom-role" and further configure it in ExtensionProperties.
   * - MaxComputeRole: specifies the MaxCompute role.
   * - TenantRole: specifies the code of the tenant role.
   * - AliyunRamUser: specifies the RAM user ID.
   */
  assignees?: string[];
  /**
   * @remarks
   * The extended properties. Different additional declarations are required based on the value of AccountType:
   * 
   * - DataWorksProjectMember: You must set the user IDs of different workspace members. The key is the workspace ID, and the value is the user ID of the workspace member. Separate multiple values with commas (,).
   * 
   * - DataWorksProjectRole: You must set the codes of different custom workspace roles. The key is the workspace ID, and the value is the code of the custom workspace role. Separate multiple values with commas (,).
   * 
   * - MaxComputeRole: You must set the roles under the MaxCompute project. The key is the MaxCompute project, and the value is the role name in MaxCompute. Separate multiple values with commas (,).
   * 
   * @example
   * {"449656": "role_project_admin,role_project_pe"}
   */
  extensionProperties?: { [key: string]: any };
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * default-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      assignees: 'Assignees',
      extensionProperties: 'ExtensionProperties',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      assignees: { 'type': 'array', 'itemType': 'string' },
      extensionProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    if(this.extensionProperties) {
      $dara.Model.validateMap(this.extensionProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionRequestNotificationServices extends $dara.Model {
  /**
   * @remarks
   * The notification channel. Valid values:
   * 
   * - Mail
   * - Sms
   * - DingRobot
   * - Weixin
   * 
   * @example
   * DingRobot
   */
  channel?: string;
  /**
   * @remarks
   * The extended information in JSON format. For example, `{"atAll":"true"}` specifies whether to mention all users.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The receiver. When Channel is set to DingRobot or Weixin, you must specify WebhookUrl.
   * 
   * @example
   * https://dingtalk.com
   */
  receiver?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      extension: 'Extension',
      receiver: 'Receiver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      extension: 'string',
      receiver: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProcessDefinitionRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The conditional expression, in the format of ((#type==\\"typeValue\\")). Example: ((#odpsProject==\\"PX_BEIJING_TEST\\")).
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The stage where the rule takes effect. Valid values:
   * - `Deployment`: Used to determine whether the approval policy is matched when the application is submitted.
   * - `Running`: Used to determine whether the approval process is exempt from approval during execution. This value is supported only for the MaxCompute type.
   * 
   * @example
   * Deployment
   */
  scope?: string;
  /**
   * @remarks
   * The condition type. Valid values:
   * 
   * - `odpsProject` 
   * - `hologresInstanceId`
   * - `sensibleLevel` 
   * - `tableGuid` 
   * - `projectId`
   * 
   * @example
   * odpsProject
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      scope: 'string',
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

export class CreateProcessDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The list of approval nodes.
   * 
   * This parameter is required.
   */
  approvalNodes?: CreateProcessDefinitionRequestApprovalNodes[];
  /**
   * @remarks
   * The client token that is used to ensure idempotence. We recommend using a UUID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow definition.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a sample policy
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the flow definition.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the flow definition.
   * 
   * This parameter is required.
   * 
   * @example
   * My approval policy
   */
  name?: string;
  /**
   * @remarks
   * The notification service declarations.
   */
  notificationServices?: CreateProcessDefinitionRequestNotificationServices[];
  /**
   * @remarks
   * The list of condition rules.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateProcessDefinitionRequestRuleConditions[];
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
   * The type of the flow definition. Valid values:
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
      approvalNodes: 'ApprovalNodes',
      clientToken: 'ClientToken',
      description: 'Description',
      enabled: 'Enabled',
      name: 'Name',
      notificationServices: 'NotificationServices',
      ruleConditions: 'RuleConditions',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodes: { 'type': 'array', 'itemType': CreateProcessDefinitionRequestApprovalNodes },
      clientToken: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      notificationServices: { 'type': 'array', 'itemType': CreateProcessDefinitionRequestNotificationServices },
      ruleConditions: { 'type': 'array', 'itemType': CreateProcessDefinitionRequestRuleConditions },
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvalNodes)) {
      $dara.Model.validateArray(this.approvalNodes);
    }
    if(Array.isArray(this.notificationServices)) {
      $dara.Model.validateArray(this.notificationServices);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

