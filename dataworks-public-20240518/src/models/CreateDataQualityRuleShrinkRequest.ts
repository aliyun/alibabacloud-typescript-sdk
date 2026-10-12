// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
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
   * Specifies whether the quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of handlers for quality rule check issues.
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
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10726
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfigShrink?: string;
  /**
   * @remarks
   * The severity level of the rule for business operations, which corresponds to strong and weak rules on the page. Valid values:
   * - Normal
   * - High
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The object monitored by the rule.
   */
  targetShrink?: string;
  /**
   * @remarks
   * The unique identifier of the rule template referenced by the rule.
   * 
   * @example
   * SYSTEM:table:table_count:fixed
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

