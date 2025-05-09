// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig } from "./ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig";
import { ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers } from "./ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers";
import { ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig } from "./ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig";
import { ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget } from "./ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget";


export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig;
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
  errorHandlers?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 22130
   */
  id?: number;
  /**
   * @remarks
   * The rule name.
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
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The settings for sampling.
   */
  samplingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
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
   * The monitored object of the rule.
   */
  target?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget;
  /**
   * @remarks
   * The ID of the template used by the rule.
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
      checkingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig,
      severity: 'string',
      target: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget,
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

