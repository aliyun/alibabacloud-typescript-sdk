// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes extends $dara.Model {
  /**
   * @remarks
   * **The type of approver for the node**. Valid values:
   * - DataWorksProjectRole: Workspace role.
   * - DataWorksProjectMember: Workspace member.
   * - TableAdministrator: Table owner.
   * - TableOrProjectAdministrator: Table or workspace administrator.
   * - AliyunResourceOwner: Alibaba Cloud account.
   * - MaxComputeRole: MaxCompute administrator.
   * - DLFAdmin: DLF legacy administrator.
   * - DLFNextAdmin: DLFNext administrator.
   * - TenantRole: Tenant role.
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
   * **The semantics vary based on the `AccountType` value**:
   * - DataWorksProjectMember: Specifies the user ID of the workspace member.
   * - DataWorksProjectRole: Specifies the code of the workspace role.
   * - MaxComputeRole: Specifies the MaxCompute role.
   * - TenantRole: Specifies the code of the tenant role.
   * - AliyunRamUser: Specifies the RAM user ID.
   */
  assignees?: string[];
  /**
   * @remarks
   * The additional declarations required for different `AccountType` values:
   * 
   * - DataWorksProjectMember: The key is `projectId`, and the value is the user ID of the workspace member. Separate multiple values with commas.
   * - MaxComputeRole: The key is the MaxCompute project, and the value is the role name in MaxCompute. Separate multiple values with commas.
   * 
   * @example
   * {"449656": "role_project_admin,role_project_pe"}
   */
  extensionProperties?: { [key: string]: any };
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
   * **The node name.**
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
   * The notification channel. Valid values:
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
   * The extended information in JSON format, such as `{"atAll":"true"}`, which specifies whether to mention all members.
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The receiver. If `Channel` is set to `DingRobot` or `Weixin`, you must specify `WebhookUrl`.
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
   * The conditional expression in the `((#type==\\"typeValue\\"))` format, such as `((#odpsProject==\\"PX_BEIJING_TEST\\"))`.
   * 
   * @example
   * ((#odpsProject==\\"PX_BEIJING_TEST\\"))
   */
  expression?: string;
  /**
   * @remarks
   * The effective stage of the rule. Valid values:
   * - `Deployment`: Used to determine whether the approval policy is matched when an application is submitted.
   * - `Running`: Used to determine whether to skip approval while the approval process runs. This value is supported only for the MaxCompute type.
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

export class GetProcessDefinitionResponseBodyProcessDefinition extends $dara.Model {
  /**
   * @remarks
   * The list of approval nodes.
   */
  approvalNodes?: GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes[];
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * Order business data approval process
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
   * The process definition ID.
   * 
   * @example
   * 210001039767
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the policy is the default system policy.
   * 
   * @example
   * false
   */
  isSystem?: boolean;
  /**
   * @remarks
   * The name of the process definition.
   * 
   * @example
   * MaxCompute table approval
   */
  name?: string;
  /**
   * @remarks
   * The notification service configurations.
   */
  notificationServices?: GetProcessDefinitionResponseBodyProcessDefinitionNotificationServices[];
  /**
   * @remarks
   * The list of effective rules for the approval policy.
   */
  ruleConditions?: GetProcessDefinitionResponseBodyProcessDefinitionRuleConditions[];
  /**
   * @remarks
   * The subtype. Valid values:
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
   * The process definition type. Valid values:
   * 
   * - MaxCompute
   * - DataService
   * - Extension
   * - Hologres
   * - DlfV1: Custom creation is not supported.
   * - Emr: Custom creation is not supported.
   * - DataAssetGovernance: Custom creation is not supported.
   * - Lindorm: Custom creation is not supported.
   * - StarRocks: Custom creation is not supported.
   * - DlfNext: Custom creation is not supported.
   * - DataWorks: Custom creation is not supported.
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
   * The process definition.
   */
  processDefinition?: GetProcessDefinitionResponseBodyProcessDefinition;
  /**
   * @remarks
   * The API request ID.
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

