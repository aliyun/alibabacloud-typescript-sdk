// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The check settings for sample data.
   */
  checkingConfigShrink?: string;
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
  errorHandlersShrink?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10726
   */
  projectId?: number;
  /**
   * @remarks
   * The sampling settings.
   */
  samplingConfigShrink?: string;
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
   * The monitored object of the rule.
   */
  targetShrink?: string;
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
      checkingConfigShrink: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlersShrink: 'ErrorHandlers',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfigShrink: 'SamplingConfig',
      severity: 'Severity',
      targetShrink: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfigShrink: 'string',
      description: 'string',
      enabled: 'boolean',
      errorHandlersShrink: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfigShrink: 'string',
      severity: 'string',
      targetShrink: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

