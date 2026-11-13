// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * The type of approver for the node. Valid values:
   * - DataWorksProjectRole: Workspace role
   * - DataWorksProjectMember: Workspace member
   * - TableAdministrator: Table owner
   * - TableOrProjectAdministrator: Table or workspace administrator
   * - AliyunResourceOwner: Alibaba Cloud account
   * - MaxComputeRole: MaxCompute administrator
   * - DLFAdmin: DLF legacy administrator
   * - DLFNextAdmin: DLFNext administrator
   * - TenantRole: Tenant role
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
   * The assignees. The semantics vary based on the AccountType:
   * - DataWorksProjectMember: Specifies the user ID of the workspace member.
   * - DataWorksProjectRole: Specifies the code of the workspace role.
   * - MaxComputeRole: Specifies the MaxCompute role.
   * - TenantRole: Specifies the code of the tenant role.
   * - AliyunRamUser: Specifies the RAM user ID.
   * 
   * @example
   * DataWorksProjectMember
   */
  assignees?: string;
  /**
   * @remarks
   * The extension properties. Different additional declarations are required based on the AccountType:
   * 
   * - `DataWorksProjectMember`: The key is projectId, and the value is the user ID of the workspace member. Separate multiple values with commas.
   * - `MaxComputeRole`: The key is the MaxCompute project, and the value is the role name in MaxCompute. Separate multiple values with commas.
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
      assignees: 'string',
      extensionProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.extensionProperties) {
      $dara.Model.validateMap(this.extensionProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionRequestNotificationServices extends $dara.Model {
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
   * Mail
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
   * The Webhook URL. This parameter is required when the channel is DingRobot or Weixin.
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

export class UpdateProcessDefinitionRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The conditional expression, such as `((#type==\\"typeValue\\"))` or `((#odpsProject==\\"PX_BEIJING_TEST\\"))`.
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The stage where the rule takes effect. Valid values:
   * - **Deployment**: Used to determine whether the approval policy is matched when the application is submitted.
   * - **Running**: Used to determine whether to skip approval while the approval process runs. [Supported only for MaxCompute]
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

export class UpdateProcessDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The list of approval nodes. Note: System policies do not take effect.
   */
  approvalNodes?: UpdateProcessDefinitionRequestApprovalNodes[];
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
  notificationServices?: UpdateProcessDefinitionRequestNotificationServices[];
  /**
   * @remarks
   * The list of conditional rules. Note: System policies do not take effect.
   */
  ruleConditions?: UpdateProcessDefinitionRequestRuleConditions[];
  static names(): { [key: string]: string } {
    return {
      approvalNodes: 'ApprovalNodes',
      clientToken: 'ClientToken',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      notificationServices: 'NotificationServices',
      ruleConditions: 'RuleConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodes: { 'type': 'array', 'itemType': UpdateProcessDefinitionRequestApprovalNodes },
      clientToken: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      notificationServices: { 'type': 'array', 'itemType': UpdateProcessDefinitionRequestNotificationServices },
      ruleConditions: { 'type': 'array', 'itemType': UpdateProcessDefinitionRequestRuleConditions },
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

