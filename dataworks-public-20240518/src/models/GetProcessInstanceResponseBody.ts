// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionApprovalNodes extends $dara.Model {
  /**
   * @example
   * DataWorksProjectRole
   */
  accountType?: string;
  assignees?: string[];
  /**
   * @example
   * none
   */
  extensionProperties?: string;
  /**
   * @example
   * 7a809b6a-2a62-4c6c-9c23-c2a145e3877d
   */
  id?: string;
  /**
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
   * @example
   * Mail
   */
  channel?: string;
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
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
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @example
   * Deployment
   */
  scope?: string;
  /**
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
  approvalNodes?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionApprovalNodes[];
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 323861511451222099
   */
  id?: string;
  /**
   * @example
   * SYSTEM_GENERATE_DEFAULT
   */
  name?: string;
  notificationServices?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionNotificationServices[];
  ruleConditions?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinitionRuleConditions[];
  /**
   * @example
   * Table
   */
  subType?: string;
  /**
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
   * @example
   * DataWorksProjectRole
   */
  accountType?: string;
  assignees?: string[];
  /**
   * @example
   * 7a809b6a-2a62-4c6c-9c23-c2a145e3877d
   */
  id?: string;
  /**
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
  memberName?: string;
  /**
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
  approvalComment?: string;
  /**
   * @example
   * deny
   */
  approvalDecision?: string;
  approvalNode?: GetProcessInstanceResponseBodyProcessInstanceApprovalTasksApprovalNode;
  /**
   * @example
   * 207947399706614297
   */
  assignee?: string;
  assigneeName?: string;
  /**
   * @example
   * 1715590800000
   */
  completeTime?: number;
  /**
   * @example
   * 1715587200000
   */
  createTime?: number;
  /**
   * @example
   * task_001
   */
  id?: string;
  /**
   * @example
   * Aborted
   */
  status?: string;
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
   * @example
   * 1107558004253538
   */
  applicator?: string;
  /**
   * @example
   * test_account
   */
  applicatorName?: string;
  approvalProcessDefinition?: GetProcessInstanceResponseBodyProcessInstanceApprovalProcessDefinition;
  approvalTasks?: GetProcessInstanceResponseBodyProcessInstanceApprovalTasks[];
  /**
   * @example
   * S-400007:ODPS acl auth failed. odps table acl auth failed
   */
  authErrorMessage?: string;
  /**
   * @example
   * 332066440109224007
   */
  id?: string;
  reason?: string;
  /**
   * @example
   * 2026-05-25 10:20:18 CST
   */
  startTime?: any;
  /**
   * @example
   * completed
   */
  status?: string;
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
  processInstance?: GetProcessInstanceResponseBodyProcessInstance;
  /**
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

