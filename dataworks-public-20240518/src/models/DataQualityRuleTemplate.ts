// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityRuleTemplateCheckingConfig } from "./DataQualityRuleTemplateCheckingConfig";
import { DataQualityRuleTemplateSamplingConfig } from "./DataQualityRuleTemplateSamplingConfig";


export class DataQualityRuleTemplate extends $dara.Model {
  checkingConfig?: DataQualityRuleTemplateCheckingConfig;
  code?: string;
  /**
   * @example
   * /ods/订单数据
   */
  directoryPath?: string;
  name?: string;
  projectId?: number;
  samplingConfig?: DataQualityRuleTemplateSamplingConfig;
  tenantId?: number;
  /**
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
      tenantId: 'TenantId',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityRuleTemplateCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityRuleTemplateSamplingConfig,
      tenantId: 'number',
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

