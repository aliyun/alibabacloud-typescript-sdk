// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationTemplateRequestAddBuiltInApplicationCustomActions extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the application. Valid values:
   * - **Allow**: Allows the traffic.
   * - **Alert**: Monitors the traffic.
   * - **Deny**: Blocks the traffic.
   * 
   * @example
   * Deny
   */
  action?: string;
  /**
   * @remarks
   * The ID of the application for which you want to configure a custom action. The application must exist in the built-in application signature library and the ID cannot be 0. You can call the ListApplications operation to query the ID.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      applicationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom actions to configure for built-in applications. The application IDs in the list must be unique.
   */
  addBuiltInApplicationCustomActions?: CreateApplicationTemplateRequestAddBuiltInApplicationCustomActions[];
  /**
   * @remarks
   * The name of the application template. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), underscores (_), and periods (.). It cannot contain spaces or be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * ApplicationTemplate01
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The switch status of built-in application control. Only **Enable** is supported, which indicates that built-in application control is enabled. If you pass Disable, an error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  builtInApplicationStatus?: string;
  /**
   * @remarks
   * The switch status of custom application rules. Valid values:
   * - **Enable**: Enables the feature.
   * - **Disable**: Disables the feature.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  customRuleStatus?: string;
  /**
   * @remarks
   * The description of the application template. The description can be up to 128 characters in length and can be empty.
   * 
   * @example
   * Office network application control
   */
  description?: string;
  /**
   * @remarks
   * The overall switch status of the application template. Valid values:
   * - **Enable**: Enables the template.
   * - **Disable**: Disables the template.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  templateStatus?: string;
  /**
   * @remarks
   * The action to take on unidentified applications. Valid values:
   * - **Allow**: Allows the traffic.
   * - **Alert**: Monitors the traffic.
   * - **Deny**: Blocks the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * Alert
   */
  unknownAction?: string;
  static names(): { [key: string]: string } {
    return {
      addBuiltInApplicationCustomActions: 'AddBuiltInApplicationCustomActions',
      applicationTemplateName: 'ApplicationTemplateName',
      builtInApplicationStatus: 'BuiltInApplicationStatus',
      customRuleStatus: 'CustomRuleStatus',
      description: 'Description',
      templateStatus: 'TemplateStatus',
      unknownAction: 'UnknownAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBuiltInApplicationCustomActions: { 'type': 'array', 'itemType': CreateApplicationTemplateRequestAddBuiltInApplicationCustomActions },
      applicationTemplateName: 'string',
      builtInApplicationStatus: 'string',
      customRuleStatus: 'string',
      description: 'string',
      templateStatus: 'string',
      unknownAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addBuiltInApplicationCustomActions)) {
      $dara.Model.validateArray(this.addBuiltInApplicationCustomActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

