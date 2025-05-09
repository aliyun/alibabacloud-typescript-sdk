// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig } from "./ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig";
import { ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers } from "./ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers";
import { ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig } from "./ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig";
import { ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget } from "./ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget";


export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig;
  /**
   * @remarks
   * The description of the rule. The description can be up to 500 characters in length.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The operations that you can perform after the rule-based check fails.
   */
  errorHandlers?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule. The name can be up to 255 characters in length and can contain digits, letters, and punctuation marks.
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The sampling settings.
   */
  samplingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * *   High
   * *   Normal
   * 
   * @example
   * NORMAL
   */
  severity?: string;
  /**
   * @remarks
   * The monitored object of the rule.
   */
  target?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget;
  /**
   * @remarks
   * The code of the template that is referenced when you create a rule.
   * 
   * @example
   * system::user_defined
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
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig,
      severity: 'string',
      target: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget,
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
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

