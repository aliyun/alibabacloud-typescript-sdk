// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * The type of approver for the node:
   * - DataWorksProjectRole: workspace role.
   * - DataWorksProjectMember: workspace member.
   * - TableAdministrator: table owner.
   * - TableOrProjectAdministrator: table or workspace administrator.
   * - AliyunResourceOwner: Alibaba Cloud account.
   * - MaxComputeRole: MaxCompute administrator.
   * - DLFAdmin: DLF Legacy administrator.
   * - DLFNextAdmin: DLF Next administrator.
   * - TenantRole: tenant role.
   * - EmrAdministrator: EMR administrator.
   * - LindormAdministrator: Lindorm administrator.
   * - AliyunRamUser: RAM user.
   * 
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  /**
   * @remarks
   * The semantics of this parameter varies based on the value of `AccountType`:
   * - DataWorksProjectMember: the user ID of the workspace member.
   * - DataWorksProjectRole: the code of the workspace role. If a custom workspace role is required, set this parameter to "custom-role" and further configure the role in ExtensionProperties.
   * - MaxComputeRole: the MaxCompute role.
   * - TenantRole: the code of the tenant role.
   * - AliyunRamUser: the RAM user ID.
   */
  assignees?: string[];
  /**
   * @remarks
   * The additional declarations required based on the value of `AccountType`:
   * 
   * - DataWorksProjectMember: specify different workspace member user IDs. The key is the workspace ID, and the value is the user ID of the workspace member. Separate multiple user IDs with commas (,).
   * 
   * - DataWorksProjectRole: specify different custom workspace role codes. The key is the workspace ID, and the value is the custom workspace role code. Separate multiple role codes with commas (,).
   * 
   * - MaxComputeRole: specify the roles under a MaxCompute project. The key is the MaxCompute project name, and the value is the role name in MaxCompute. Separate multiple role names with commas (,).
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
   * The extension information in JSON format. Example: `{"atAll":"true"}`, which specifies whether to mention all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The WebhookUrl that must be specified when Channel is set to DingRobot or Weixin.
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
   * The condition expression in the format of ((#type==\\"typeValue\\")). Example: ((#odpsProject==\\"PX_BEIJING_TEST\\")).
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The stage at which the rule takes effect:
   * - `Deployment`: used to determine whether the approval policy matches when a request is submitted.
   * - `Running`: used to determine whether approval is exempted during the execution of the approval process. This value is supported only for the MaxCompute type.
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

