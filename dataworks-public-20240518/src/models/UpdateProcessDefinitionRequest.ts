// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionRequestApprovalNodes extends $dara.Model {
  /**
   * @example
   * TableOrProjectAdministrator
   */
  accountType?: string;
  /**
   * @example
   * DataWorksProjectMember
   */
  assignees?: string;
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

export class UpdateProcessDefinitionRequest extends $dara.Model {
  approvalNodes?: UpdateProcessDefinitionRequestApprovalNodes[];
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 177554881536128
   */
  id?: string;
  name?: string;
  notificationServices?: UpdateProcessDefinitionRequestNotificationServices[];
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

