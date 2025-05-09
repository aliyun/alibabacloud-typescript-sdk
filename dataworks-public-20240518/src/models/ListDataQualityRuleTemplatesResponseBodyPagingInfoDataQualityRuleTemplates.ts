// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig } from "./ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig";
import { ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig } from "./ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig";


export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates extends $dara.Model {
  /**
   * @remarks
   * Sample verification settings
   */
  checkingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig;
  /**
   * @remarks
   * Rule template Code
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
   * DataWorks workspace ID
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * Settings required for sample collection
   */
  samplingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig;
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
      checkingConfig: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig,
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

