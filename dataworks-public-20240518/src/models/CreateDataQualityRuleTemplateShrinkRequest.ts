// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfigShrink?: string;
  /**
   * @remarks
   * The directory in which the template is stored. Slashes (/) are used to separate directory levels. The name of each directory level can be up to 1,024 characters in length. It cannot contain whitespace characters or slashes (/).
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 512 characters in length and can contain digits, letters, and punctuation marks.
   * 
   * This parameter is required.
   * 
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The sampling settings.
   */
  samplingConfigShrink?: string;
  /**
   * @remarks
   * The applicable scope of the template. Valid values:
   * 
   * *   Tenant: The template is available in all workspaces in the current tenant.
   * *   Project: The template is available only in the current workspace.
   * 
   * @example
   * Project
   */
  visibleScope?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfigShrink: 'CheckingConfig',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfigShrink: 'SamplingConfig',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfigShrink: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfigShrink: 'string',
      visibleScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

