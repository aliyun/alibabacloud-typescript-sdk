// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig";
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers";
import { CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig } from "./CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig";


export class CreateDataQualityEvaluationTaskRequestDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig;
  /**
   * @remarks
   * The description of the monitoring rule.
   * 
   * @example
   * OpenAPI test rules
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the monitoring rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The operations that you can perform after the rule-based check fails.
   */
  errorHandlers?: CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2176
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * @example
   * OpenAPI test rules
   */
  name?: string;
  /**
   * @remarks
   * The parameters required for sampling.
   */
  samplingConfig?: CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The strength of the monitoring rule. Valid values:
   * 
   * *   Normal
   * *   High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The ID of the template used by the monitoring rule.
   * 
   * @example
   * SYSTEM:field:null_value:fixed:0
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: CreateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      samplingConfig: CreateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig,
      severity: 'string',
      templateCode: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

