// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityRuleTemplateRequestCheckingConfig } from "./CreateDataQualityRuleTemplateRequestCheckingConfig";
import { CreateDataQualityRuleTemplateRequestSamplingConfig } from "./CreateDataQualityRuleTemplateRequestSamplingConfig";


export class CreateDataQualityRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: CreateDataQualityRuleTemplateRequestCheckingConfig;
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
  samplingConfig?: CreateDataQualityRuleTemplateRequestSamplingConfig;
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
      checkingConfig: 'CheckingConfig',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: CreateDataQualityRuleTemplateRequestCheckingConfig,
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: CreateDataQualityRuleTemplateRequestSamplingConfig,
      visibleScope: 'string',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

