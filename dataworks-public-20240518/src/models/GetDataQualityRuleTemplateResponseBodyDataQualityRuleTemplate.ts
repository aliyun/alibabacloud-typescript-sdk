// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig } from "./GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig";
import { GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig } from "./GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig";


export class GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig;
  /**
   * @remarks
   * The code for the template.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
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
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 4020
   */
  projectId?: number;
  /**
   * @remarks
   * The sampling settings.
   */
  samplingConfig?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig;
  /**
   * @remarks
   * Available range of templates:
   * - Tenant: all tenants are available
   * - Project: only available in the current Project
   * 
   * @example
   * Project
   */
  visibleScope?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      code: 'Code',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig,
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

