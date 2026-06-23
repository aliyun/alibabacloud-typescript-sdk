// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * The type of the approver for the node. Valid values:
   * 
   * - `DataWorksProjectRole`: A workspace role
   * 
   * - `DataWorksProjectMember`: A workspace member
   * 
   * - `TableAdministrator`: A table administrator
   * 
   * - `TableOrProjectAdministrator`: A table or workspace administrator
   * 
   * - `AliyunResourceOwner`: An Alibaba Cloud account
   * 
   * - `MaxComputeRole`: A MaxCompute role
   * 
   * - `DLFAdmin`: A DlfLegacy administrator
   * 
   * - `DLFNextAdmin`: A DLFNext administrator
   * 
   * - `TenantRole`: A tenant role
   * 
   * - `EmrAdministrator`: An Emr administrator
   * 
   * - `LindormAdministrator`: A Lindorm administrator
   * 
   * - `AliyunRamUser`: A RAM user
   * 
   * @example
   * DataWorksProjectRole
   */
  accountType?: string;
  /**
   * @remarks
   * The specified approvers.
   * 
   * The contents of this parameter depend on the `AccountType` value:
   * 
   * - If `AccountType` is `DataWorksProjectMember`, this parameter contains the user IDs of workspace members.
   * 
   * - If `AccountType` is `DataWorksProjectRole`, this parameter contains the codes of workspace roles.
   * 
   * - If `AccountType` is `MaxComputeRole`, this parameter contains the MaxCompute roles.
   * 
   * - If `AccountType` is `TenantRole`, this parameter contains the codes of tenant roles.
   * 
   * - If `AccountType` is `AliyunRamUser`, this parameter contains the user IDs of RAM users.
   */
  assignees?: string[];
  /**
   * @remarks
   * The extended description of the approval node.
   * 
   * @example
   * none
   */
  extensionProperties?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 7a809b6a-2a62-4c6c-9c23-c2a145e3877d
   */
  id?: string;
  /**
   * @remarks
   * The node name.
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
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      assignees: { 'type': 'array', 'itemType': 'string' },
      extensionProperties: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionNotificationServices extends $dara.Model {
  /**
   * @remarks
   * The notification channel. Valid values:
   * 
   * - `Mail`
   * 
   * - `Sms`
   * 
   * - `DingRobot`
   * 
   * - `Weixin`
   * 
   * @example
   * Mail
   */
  channel?: string;
  /**
   * @remarks
   * Additional information in JSON format. For example, `{"atAll":"true"}` indicates whether to @all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * If `Channel` is set to `DingRobot` or `Weixin`, the value of this parameter must be the webhook URL.
   * 
   * @example
   * https://dingtalk
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

export class GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The expression of the rule condition. Format: `((#type==\\"typeValue\\"))`.
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The rule scope. Valid values:
   * 
   * - `Deployment`: Determines whether the policy applies when a request is submitted.
   * 
   * - `Running`: Determines whether to skip approval while the process instance runs. This value is supported only for MaxCompute approval policies.
   * 
   * @example
   * Deployment
   */
  scope?: string;
  /**
   * @remarks
   * The type of the rule condition. Valid values:
   * 
   * - `odpsProject`: Applies to a specific MaxCompute project.
   * 
   * - `hologresInstanceId`: Applies to a specific Hologres instance.
   * 
   * - `sensibleLevel`: Applies to a specific security level.
   * 
   * - `tableGuid`: Applies to a specific table.
   * 
   * - `projectId`: Applies to a specific workspace.
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

export class GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinition extends $dara.Model {
  /**
   * @remarks
   * The approval nodes.
   */
  approvalNodes?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionApprovalNodes[];
  /**
   * @remarks
   * The description of the approval policy.
   * 
   * @example
   * 流程定义描述
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The approval policy ID.
   * 
   * @example
   * 323861511451222099
   */
  id?: string;
  /**
   * @remarks
   * The name of the approval policy.
   * 
   * @example
   * SYSTEM_GENERATE_DEFAULT
   */
  name?: string;
  /**
   * @remarks
   * The notification services.
   */
  notificationServices?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionNotificationServices[];
  /**
   * @remarks
   * The rules that determine when the approval policy takes effect.
   */
  ruleConditions?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionRuleConditions[];
  /**
   * @remarks
   * The subtype of the approval policy. Valid values:
   * 
   * - `Table`
   * 
   * - `Column`
   * 
   * - `Database`
   * 
   * - `Schema`
   * 
   * - `Default`
   * 
   * @example
   * Table
   */
  subType?: string;
  /**
   * @remarks
   * The type of the approval policy. Valid values:
   * 
   * - `MaxCompute`
   * 
   * - `DataService`
   * 
   * - `DlfV1` (Custom creation is not supported)
   * 
   * - `Extension`
   * 
   * - `Hologres`
   * 
   * - `Emr` (Custom creation is not supported)
   * 
   * - `DataAssetGovernance` (Custom creation is not supported)
   * 
   * - `Lindorm` (Custom creation is not supported)
   * 
   * - `StarRocks` (Custom creation is not supported)
   * 
   * - `DlfNext` (Custom creation is not supported)
   * 
   * - `DataWorks` (Custom creation is not supported)
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalNodes: 'ApprovalNodes',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      notificationServices: 'NotificationServices',
      ruleConditions: 'RuleConditions',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodes: { 'type': 'array', 'itemType': GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionApprovalNodes },
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      name: 'string',
      notificationServices: { 'type': 'array', 'itemType': GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionNotificationServices },
      ruleConditions: { 'type': 'array', 'itemType': GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionRuleConditions },
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

export class GetProcessInstanceResponseBodyProcessInstanceApprovalTasksApprovalNode extends $dara.Model {
  /**
   * @remarks
   * The type of the approver for the node. Valid values:
   * 
   * - `DataWorksProjectRole`: A workspace role
   * 
   * - `DataWorksProjectMember`: A workspace member
   * 
   * - `TableAdministrator`: A table administrator
   * 
   * - `TableOrProjectAdministrator`: A table or workspace administrator
   * 
   * - `AliyunResourceOwner`: An Alibaba Cloud account
   * 
   * - `MaxComputeRole`: A MaxCompute role
   * 
   * - `DLFAdmin`: A DlfLegacy administrator
   * 
   * - `DLFNextAdmin`: A DLFNext administrator
   * 
   * - `TenantRole`: A tenant role
   * 
   * - `EmrAdministrator`: An Emr administrator
   * 
   * - `LindormAdministrator`: A Lindorm administrator
   * 
   * - `AliyunRamUser`: A RAM user
   * 
   * @example
   * DataWorksProjectRole
   */
  accountType?: string;
  /**
   * @remarks
   * The specified approvers.
   * 
   * The contents of this parameter depend on the `AccountType` value:
   * 
   * - If `AccountType` is `DataWorksProjectMember`, this parameter contains the user IDs of workspace members.
   * 
   * - If `AccountType` is `DataWorksProjectRole`, this parameter contains the codes of workspace roles.
   * 
   * - If `AccountType` is `MaxComputeRole`, this parameter contains the MaxCompute roles.
   * 
   * - If `AccountType` is `TenantRole`, this parameter contains the codes of tenant roles.
   * 
   * - If `AccountType` is `AliyunRamUser`, this parameter contains the user IDs of RAM users.
   */
  assignees?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 7a809b6a-2a62-4c6c-9c23-c2a145e3877d
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * default-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      assignees: 'Assignees',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      assignees: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessInstanceResponseBodyProcessInstanceApprovalTasksTaskCandidates extends $dara.Model {
  /**
   * @remarks
   * The name of the approver.
   * 
   * @example
   * 李四
   */
  memberName?: string;
  /**
   * @remarks
   * The user ID of the approver.
   * 
   * @example
   * 207947397776614297
   */
  memberUserId?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      memberUserId: 'MemberUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      memberUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessInstanceResponseBodyProcessInstanceApprovalTasks extends $dara.Model {
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * 同意
   */
  approvalComment?: string;
  /**
   * @remarks
   * The approval decision. Valid values:
   * 
   * - `Agree`
   * 
   * - `Deny`
   * 
   * @example
   * Deny
   */
  approvalDecision?: string;
  /**
   * @remarks
   * The approval node from the corresponding approval policy.
   */
  approvalNode?: GetProcessInstanceResponseBodyProcessInstanceApprovalTasksApprovalNode;
  /**
   * @remarks
   * The user ID of the actual approver.
   * 
   * @example
   * 207947399706614297
   */
  assignee?: string;
  /**
   * @remarks
   * The name of the actual approver.
   * 
   * @example
   * 李四
   */
  assigneeName?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 1715590800000
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1715587200000
   */
  createTime?: number;
  /**
   * @remarks
   * The approval task ID.
   * 
   * @example
   * task_001
   */
  id?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - `Completed`: The task is complete.
   * 
   * - `Pending`: The task is pending.
   * 
   * - `Aborted`: The task is aborted.
   * 
   * @example
   * Aborted
   */
  status?: string;
  /**
   * @remarks
   * The candidate approvers for the task.
   */
  taskCandidates?: GetProcessInstanceResponseBodyProcessInstanceApprovalTasksTaskCandidates[];
  static names(): { [key: string]: string } {
    return {
      approvalComment: 'ApprovalComment',
      approvalDecision: 'ApprovalDecision',
      approvalNode: 'ApprovalNode',
      assignee: 'Assignee',
      assigneeName: 'AssigneeName',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      id: 'Id',
      status: 'Status',
      taskCandidates: 'TaskCandidates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalComment: 'string',
      approvalDecision: 'string',
      approvalNode: GetProcessInstanceResponseBodyProcessInstanceApprovalTasksApprovalNode,
      assignee: 'string',
      assigneeName: 'string',
      completeTime: 'number',
      createTime: 'number',
      id: 'string',
      status: 'string',
      taskCandidates: { 'type': 'array', 'itemType': GetProcessInstanceResponseBodyProcessInstanceApprovalTasksTaskCandidates },
    };
  }

  validate() {
    if(this.approvalNode && typeof (this.approvalNode as any).validate === 'function') {
      (this.approvalNode as any).validate();
    }
    if(Array.isArray(this.taskCandidates)) {
      $dara.Model.validateArray(this.taskCandidates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessInstanceResponseBodyProcessInstance extends $dara.Model {
  /**
   * @remarks
   * The user ID of the applicant.
   * 
   * @example
   * 1107558004253538
   */
  applicator?: string;
  /**
   * @remarks
   * The username of the applicant\\"s Alibaba Cloud account.
   * 
   * @example
   * test_account
   */
  applicatorName?: string;
  /**
   * @remarks
   * The approval policy applied to this process instance.
   */
  approvalProcessDefinition?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinition;
  /**
   * @remarks
   * The approval tasks.
   */
  approvalTasks?: GetProcessInstanceResponseBodyProcessInstanceApprovalTasks[];
  /**
   * @remarks
   * The authorization failure message.
   * 
   * **Note**: This parameter is returned only if the authorization fails.
   * 
   * @example
   * S-400007:ODPS acl auth failed. odps table acl auth failed
   */
  authErrorMessage?: string;
  /**
   * @remarks
   * The process instance ID.
   * 
   * @example
   * 332066440109224007
   */
  id?: string;
  /**
   * @remarks
   * The reason for the request.
   * 
   * @example
   * 业务需要
   */
  reason?: string;
  /**
   * @remarks
   * The time when the approval process started.
   * 
   * @example
   * 2026-05-25 10:20:18 CST
   */
  startTime?: any;
  /**
   * @remarks
   * The status of the process instance. Valid values:
   * 
   * - `Completed`: The request is approved.
   * 
   * - `Running`: The request is in the approval process.
   * 
   * - `Aborted`: The request is withdrawn.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The name of the process instance.
   * 
   * @example
   * MaxCompute表权限申请
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      applicator: 'Applicator',
      applicatorName: 'ApplicatorName',
      approvalProcessDefinition: 'ApprovalProcessDefinition',
      approvalTasks: 'ApprovalTasks',
      authErrorMessage: 'AuthErrorMessage',
      id: 'Id',
      reason: 'Reason',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicator: 'string',
      applicatorName: 'string',
      approvalProcessDefinition: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinition,
      approvalTasks: { 'type': 'array', 'itemType': GetProcessInstanceResponseBodyProcessInstanceApprovalTasks },
      authErrorMessage: 'string',
      id: 'string',
      reason: 'string',
      startTime: 'any',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.approvalProcessDefinition && typeof (this.approvalProcessDefinition as any).validate === 'function') {
      (this.approvalProcessDefinition as any).validate();
    }
    if(Array.isArray(this.approvalTasks)) {
      $dara.Model.validateArray(this.approvalTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProcessInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the approval process instance.
   */
  processInstance?: GetProcessInstanceResponseBodyProcessInstance;
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processInstance: 'ProcessInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processInstance: GetProcessInstanceResponseBodyProcessInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.processInstance && typeof (this.processInstance as any).validate === 'function') {
      (this.processInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

