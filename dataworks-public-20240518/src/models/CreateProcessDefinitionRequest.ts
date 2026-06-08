// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  assignees?: string[];
  extensionProperties?: { [key: string]: any };
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

export class CreateProcessDefinitionRequestRuleConditions extends $dara.Model {
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

export class CreateProcessDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  approvalNodes?: CreateProcessDefinitionRequestApprovalNodes[];
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  notificationServices?: CreateProcessDefinitionRequestNotificationServices[];
  /**
   * @remarks
   * This parameter is required.
   */
  ruleConditions?: CreateProcessDefinitionRequestRuleConditions[];
  /**
   * @example
   * Table
   */
  subType?: string;
  /**
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

