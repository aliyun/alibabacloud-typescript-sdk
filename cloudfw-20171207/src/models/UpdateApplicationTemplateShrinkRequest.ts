// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom actions to be added or updated for built-in applications. This list is merged with RemoveBuiltInApplicationCustomActions by removing items first and then adding items. The same application ID cannot appear in both lists at the same time.
   */
  addBuiltInApplicationCustomActionsShrink?: string;
  /**
   * @remarks
   * The ID of the application template to be modified. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The name of the application template. The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), underscores (_), and periods (.). It cannot contain spaces. If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Application template 02
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The switch status of built-in application control. Valid values: only **Enable** is supported. If you specify Disable, an error is returned. If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Enable
   */
  builtInApplicationStatus?: string;
  /**
   * @remarks
   * The switch status of custom rules for applications. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Enable
   */
  customRuleStatus?: string;
  /**
   * @remarks
   * The description of the application template. The description can be up to 128 characters in length. If this parameter is not specified, the original value is retained. If an empty string is specified, the description is cleared.
   * 
   * @example
   * Office network application control
   */
  description?: string;
  /**
   * @remarks
   * The list of built-in applications from which to remove custom actions. After removal, these applications revert to the default actions of the template. The same application ID cannot appear in AddBuiltInApplicationCustomActions at the same time.
   */
  removeBuiltInApplicationCustomActionsShrink?: string;
  /**
   * @remarks
   * The master switch status of the application template. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Enable
   */
  templateStatus?: string;
  /**
   * @remarks
   * The action for unidentified applications. Valid values:
   * - **Allow**: Allow.
   * - **Alert**: Monitor.
   * - **Deny**: Block.
   * If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * Alert
   */
  unknownAction?: string;
  static names(): { [key: string]: string } {
    return {
      addBuiltInApplicationCustomActionsShrink: 'AddBuiltInApplicationCustomActions',
      applicationTemplateId: 'ApplicationTemplateId',
      applicationTemplateName: 'ApplicationTemplateName',
      builtInApplicationStatus: 'BuiltInApplicationStatus',
      customRuleStatus: 'CustomRuleStatus',
      description: 'Description',
      removeBuiltInApplicationCustomActionsShrink: 'RemoveBuiltInApplicationCustomActions',
      templateStatus: 'TemplateStatus',
      unknownAction: 'UnknownAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBuiltInApplicationCustomActionsShrink: 'string',
      applicationTemplateId: 'string',
      applicationTemplateName: 'string',
      builtInApplicationStatus: 'string',
      customRuleStatus: 'string',
      description: 'string',
      removeBuiltInApplicationCustomActionsShrink: 'string',
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

