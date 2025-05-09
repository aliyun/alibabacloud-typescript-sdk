// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig";
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers";
import { UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig";


export class UpdateDataQualityEvaluationTaskRequestDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * OpenAPI test rules
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The operations that you can perform after the rule-based check fails.
   */
  errorHandlers?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The rule ID. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to query the ID of the monitoring rule.
   * 
   * @example
   * 1022171560
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
  samplingConfig?: UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * *   Normal
   * *   High
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The ID of the template used by the rule.
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
      checkingConfig: UpdateDataQualityEvaluationTaskRequestDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      samplingConfig: UpdateDataQualityEvaluationTaskRequestDataQualityRulesSamplingConfig,
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

