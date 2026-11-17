// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationTemplateResponseBodyApplicationTemplateBuiltInApplicationActions extends $dara.Model {
  /**
   * @remarks
   * The action performed on the application. Valid values:
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
   * The ID of the application in the built-in application signature library.
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

export class GetApplicationTemplateResponseBodyApplicationTemplate extends $dara.Model {
  /**
   * @remarks
   * The ID of the application template.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The name of the application template.
   * 
   * @example
   * Application Template 01
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The list of built-in application actions.
   */
  builtInApplicationActions?: GetApplicationTemplateResponseBodyApplicationTemplateBuiltInApplicationActions[];
  /**
   * @remarks
   * The switch status for built-in application control. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  builtInApplicationStatus?: string;
  /**
   * @remarks
   * The creation time of the application template. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  createTime?: number;
  /**
   * @remarks
   * The switch status for custom application rules. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  customRuleStatus?: string;
  /**
   * @remarks
   * The description of the application template.
   * 
   * @example
   * Office network application control
   */
  description?: string;
  /**
   * @remarks
   * The overall switch status of the application template. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  templateStatus?: string;
  /**
   * @remarks
   * The action for unidentified applications. Valid values:
   * - **Allow**: Allows the traffic.
   * - **Alert**: Monitors the traffic.
   * - **Deny**: Blocks the traffic.
   * 
   * @example
   * Alert
   */
  unknownAction?: string;
  /**
   * @remarks
   * The last update time of the application template. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731469200
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      applicationTemplateName: 'ApplicationTemplateName',
      builtInApplicationActions: 'BuiltInApplicationActions',
      builtInApplicationStatus: 'BuiltInApplicationStatus',
      createTime: 'CreateTime',
      customRuleStatus: 'CustomRuleStatus',
      description: 'Description',
      templateStatus: 'TemplateStatus',
      unknownAction: 'UnknownAction',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      applicationTemplateName: 'string',
      builtInApplicationActions: { 'type': 'array', 'itemType': GetApplicationTemplateResponseBodyApplicationTemplateBuiltInApplicationActions },
      builtInApplicationStatus: 'string',
      createTime: 'number',
      customRuleStatus: 'string',
      description: 'string',
      templateStatus: 'string',
      unknownAction: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.builtInApplicationActions)) {
      $dara.Model.validateArray(this.builtInApplicationActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application template details.
   */
  applicationTemplate?: GetApplicationTemplateResponseBodyApplicationTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplate: 'ApplicationTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplate: GetApplicationTemplateResponseBodyApplicationTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationTemplate && typeof (this.applicationTemplate as any).validate === 'function') {
      (this.applicationTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

