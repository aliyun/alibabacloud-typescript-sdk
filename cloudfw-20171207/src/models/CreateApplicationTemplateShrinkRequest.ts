// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom actions to configure for built-in applications. The application IDs in the list must be unique.
   */
  addBuiltInApplicationCustomActionsShrink?: string;
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
      addBuiltInApplicationCustomActionsShrink: 'AddBuiltInApplicationCustomActions',
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
      addBuiltInApplicationCustomActionsShrink: 'string',
      applicationTemplateName: 'string',
      builtInApplicationStatus: 'string',
      customRuleStatus: 'string',
      description: 'string',
      templateStatus: 'string',
      unknownAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

