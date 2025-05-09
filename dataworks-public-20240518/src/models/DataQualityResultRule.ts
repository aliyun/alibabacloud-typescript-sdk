// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityResultRuleCheckingConfig } from "./DataQualityResultRuleCheckingConfig";
import { DataQualityResultRuleErrorHandlers } from "./DataQualityResultRuleErrorHandlers";
import { DataQualityResultRuleSamplingConfig } from "./DataQualityResultRuleSamplingConfig";
import { DataQualityResultRuleTarget } from "./DataQualityResultRuleTarget";


export class DataQualityResultRule extends $dara.Model {
  checkingConfig?: DataQualityResultRuleCheckingConfig;
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
  errorHandlers?: DataQualityResultRuleErrorHandlers[];
  /**
   * @example
   * 100001
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
  samplingConfig?: DataQualityResultRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityResultRuleTarget;
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
      checkingConfig: DataQualityResultRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityResultRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityResultRuleSamplingConfig,
      severity: 'string',
      target: DataQualityResultRuleTarget,
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

