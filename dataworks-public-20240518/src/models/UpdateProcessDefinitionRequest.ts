// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * The approver type for the node. Valid values:
   * 
   * - `DataWorksProjectRole`: A workspace role.
   * 
   * - `DataWorksProjectMember`: A workspace member.
   * 
   * - `TableAdministrator`: A table administrator.
   * 
   * - `TableOrProjectAdministrator`: The administrator of the table or project.
   * 
   * - `AliyunResourceOwner`: An Alibaba Cloud account.
   * 
   * - `MaxComputeRole`: A MaxCompute administrator.
   * 
   * - `DLFAdmin`: A DlfLegacy administrator.
   * 
   * - `DLFNextAdmin`: A DLFNext administrator.
   * 
   * - `TenantRole`: A tenant role.
   * 
   * - `EmrAdministrator`: An EMR administrator.
   * 
   * - `LindormAdministrator`: A Lindorm administrator.
   * 
   * - `AliyunRamUser`: A RAM user.
   * 
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  /**
   * @remarks
   * Specifies the approvers. The required value depends on the `AccountType`:
   * 
   * - If `AccountType` is `DataWorksProjectMember`, this parameter specifies the user IDs of workspace members.
   * 
   * - If `AccountType` is `DataWorksProjectRole`, this parameter specifies the codes of workspace roles.
   * 
   * - If `AccountType` is `MaxComputeRole`, this parameter specifies the MaxCompute roles.
   * 
   * - If `AccountType` is `TenantRole`, this parameter specifies the codes of tenant roles.
   * 
   * - If `AccountType` is `AliyunRamUser`, this parameter specifies the user IDs of RAM users.
   * 
   * @example
   * DataWorksProjectMember
   */
  assignees?: string;
  /**
   * @remarks
   * Additional properties that are required for specific `AccountType` values:
   * 
   * - If `AccountType` is `DataWorksProjectMember`: The key is `projectId` and the value is the user ID of a workspace member. Use commas (,) to separate multiple user IDs.
   * 
   * - If `AccountType` is `MaxComputeRole`: The key is the MaxCompute project name and the value is the role name in MaxCompute. Use commas (,) to separate multiple role names.
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
   * 
   * - Sms
   * 
   * - DingRobot
   * 
   * - Weixin
   * 
   * @example
   * Mail
   */
  channel?: string;
  /**
   * @remarks
   * Additional information in JSON format. For example, use {"atAll":"true"} to specify whether to notify all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The webhook URL. This parameter is required when `Channel` is set to `DingRobot` or `Weixin`.
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
   * The conditional expression. Format: ((#type==\\"typeValue\\")). For example: ((#odpsProject==\\"PX_BEIJING_TEST\\")).
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The phase in which the rule takes effect. Valid values:
   * 
   * - **Deployment**: Determines whether the approval policy applies when an application is submitted.
   * 
   * - **Running**: Determines whether to skip the approval during the approval process. This phase is supported only for MaxCompute.
   * 
   * @example
   * Deployment
   */
  scope?: string;
  /**
   * @remarks
   * The type of the condition. Valid values:
   * 
   * - `odpsProject`
   * 
   * - `hologresInstanceId`
   * 
   * - `sensibleLevel`
   * 
   * - `tableGuid`
   * 
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
   * A list of approval nodes. This parameter does not apply to system policies.
   */
  approvalNodes?: UpdateProcessDefinitionRequestApprovalNodes[];
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
  notificationServices?: UpdateProcessDefinitionRequestNotificationServices[];
  /**
   * @remarks
   * A list of rule conditions. This parameter does not apply to system policies.
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

