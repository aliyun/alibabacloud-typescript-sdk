// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * **Node approver type**:
   * 
   * - DataWorksProjectRole project role
   * 
   * - DataWorksProjectMember project member
   * 
   * - TableAdministrator table administrator
   * 
   * - TableOrProjectAdministrator Table or project administrator
   * 
   * - AliyunResourceOwner Alibaba Cloud account
   * 
   * - MaxComputeRole MC Administrator
   * 
   * - DLFAdmin and DlfLegacy administrator
   * 
   * - DLFNext Administrator
   * 
   * - TenantRole tenant role
   * 
   * - EmrAdministrator Emr administrator
   * 
   * - LindormAdministrator Lindorm Administrator
   * 
   * - AliyunRamUser RAM user
   * 
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  /**
   * @remarks
   * **`AccountType` has different semantics for different types**:
   * 
   * - DataWorksProjectMember specifies the project member\\"s UserId.
   * 
   * - DataWorksProjectRole specifies the code of the project role.
   * 
   * - MaxComputeRole specifies the MaxCompute role.
   * 
   * - TenantRole specifies the tenant role code.
   * 
   * - AliyunRamUser specifies the RAM user ID.
   */
  assignees?: string[];
  /**
   * @remarks
   * When `AccountType `is set to different types, you must provide different additional declarations:
   * 
   * - DataWorksProjectMember: The key is projectId, and the value is the UserIds of project members, separated by commas.
   * 
   * - MaxComputeRole: The key is a MaxCompute project and the value is a role name in MaxCompute. Multiple role names are separated by a comma.
   */
  extensionProperties?: { [key: string]: any };
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * 7a809b6a-2a62-4c6c-9c23-c2a145e3877d
   */
  id?: string;
  /**
   * @remarks
   * **Node Name**
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
      extensionProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
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

export class GetProcessDefinitionResponseBodyProcessDefinitionNotificationServices extends $dara.Model {
  /**
   * @remarks
   * Notification channel, an enumeration:
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
   * DingRobot
   */
  channel?: string;
  /**
   * @remarks
   * Additional information in JSON format, such as `{"atAll":"true"}` to specify whether to @all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * You must specify WebhookUrl when Channel is DingRobot or Weixin.
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

export class GetProcessDefinitionResponseBodyProcessDefinitionRuleConditions extends $dara.Model {
  /**
   * @remarks
   * A conditional expression is in the format `((#type==\\"typeValue\\"))`, such as `((#odpsProject==\\"PX_BEIJING_TEST\\"))`.
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * rule effective stage:
   * 
   * - `Deployment` determines whether an application matches this approval policy upon submission.
   * 
   * - `Running` is used to determine whether an approval process is approval-free. This feature is supported only for the MaxCompute type.
   * 
   * @example
   * Deployment
   */
  scope?: string;
  /**
   * @remarks
   * The condition type. This is an enumeration:
   * 
   * - `odpsProject`,
   * 
   * - `hologresInstanceId`
   * 
   * - `sensibleLevel`,
   * 
   * - `tableGuid`,
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

export class GetProcessDefinitionResponseBodyProcessDefinition extends $dara.Model {
  /**
   * @remarks
   * Approval node list
   */
  approvalNodes?: GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes[];
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * 订单业务数据审批流程
   */
  description?: string;
  /**
   * @remarks
   * Enable
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Process definition ID
   * 
   * @example
   * 210001039767
   */
  id?: string;
  /**
   * @remarks
   * System Default Policy
   * 
   * @example
   * false
   */
  isSystem?: boolean;
  /**
   * @remarks
   * Process definition name
   * 
   * @example
   * MaxCompute 表审批
   */
  name?: string;
  /**
   * @remarks
   * Notification Service Statement
   */
  notificationServices?: GetProcessDefinitionResponseBodyProcessDefinitionNotificationServices[];
  /**
   * @remarks
   * List of rule conditions
   */
  ruleConditions?: GetProcessDefinitionResponseBodyProcessDefinitionRuleConditions[];
  /**
   * @remarks
   * Subtype:
   * 
   * - Table
   * 
   * - Column
   * 
   * - Database
   * 
   * - Schema
   * 
   * - Default
   * 
   * @example
   * Table
   */
  subType?: string;
  /**
   * @remarks
   * Process definition type. Valid values:
   * 
   * - MaxCompute
   * 
   * - DataService
   * 
   * - Extension
   * 
   * - Hologres
   * 
   * - DlfV1 (Custom creation not supported).
   * 
   * - EMR (Custom creation not supported).
   * 
   * - DataAssetGovernance (Custom creation not supported).
   * 
   * - Lindorm (Custom creation not supported).
   * 
   * - StarRocks (Custom creation not supported).
   * 
   * - DlfNext (Custom creation not supported).
   * 
   * - DataWorks (Custom creation not supported).
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
      isSystem: 'IsSystem',
      name: 'Name',
      notificationServices: 'NotificationServices',
      ruleConditions: 'RuleConditions',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodes: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes },
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      isSystem: 'boolean',
      name: 'string',
      notificationServices: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyProcessDefinitionNotificationServices },
      ruleConditions: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyProcessDefinitionRuleConditions },
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

export class GetProcessDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Process definition
   */
  processDefinition?: GetProcessDefinitionResponseBodyProcessDefinition;
  /**
   * @remarks
   * API request ID
   * 
   * @example
   * 0bc5df3a17***903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processDefinition: 'ProcessDefinition',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processDefinition: GetProcessDefinitionResponseBodyProcessDefinition,
      requestId: 'string',
    };
  }

  validate() {
    if(this.processDefinition && typeof (this.processDefinition as any).validate === 'function') {
      (this.processDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

