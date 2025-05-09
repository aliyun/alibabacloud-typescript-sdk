// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityRuleCheckingConfig } from "./DataQualityRuleCheckingConfig";
import { DataQualityRuleErrorHandlers } from "./DataQualityRuleErrorHandlers";
import { DataQualityRuleSamplingConfig } from "./DataQualityRuleSamplingConfig";
import { DataQualityRuleTarget } from "./DataQualityRuleTarget";


export class DataQualityRule extends $dara.Model {
  checkingConfig?: DataQualityRuleCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: DataQualityRuleErrorHandlers[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 表不能为空
   */
  name?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  samplingConfig?: DataQualityRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityRuleTarget;
  /**
   * @example
   * SYSTEM:user_defined_sql
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityRuleSamplingConfig,
      severity: 'string',
      target: DataQualityRuleTarget,
      templateCode: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
    }
    if(Array.isArray(this.errorHandlers)) {
      $dara.Model.validateArray(this.errorHandlers);
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

