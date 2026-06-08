// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes extends $dara.Model {
  /**
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  assignees?: string[];
  extensionProperties?: { [key: string]: any };
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
   * @example
   * DingRobot
   */
  channel?: string;
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
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

export class GetProcessDefinitionResponseBodyProcessDefinition extends $dara.Model {
  approvalNodes?: GetProcessDefinitionResponseBodyProcessDefinitionApprovalNodes[];
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 210001039767
   */
  id?: string;
  /**
   * @example
   * false
   */
  isSystem?: boolean;
  name?: string;
  notificationServices?: GetProcessDefinitionResponseBodyProcessDefinitionNotificationServices[];
  ruleConditions?: GetProcessDefinitionResponseBodyProcessDefinitionRuleConditions[];
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
  processDefinition?: GetProcessDefinitionResponseBodyProcessDefinition;
  /**
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

