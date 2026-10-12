// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfigShrink?: string;
  /**
   * @remarks
   * The description of the rule. It can be up to 500 characters in length.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of error handlers for quality rule check issues.
   */
  errorHandlersShrink?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks. It can be up to 255 characters in length.
   * 
   * @example
   * Table cannot be empty
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Configuration page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfigShrink?: string;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to the strong or weak rule on the page. Valid values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
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
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfigShrink: 'SamplingConfig',
      severity: 'Severity',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfigShrink: 'string',
      description: 'string',
      enabled: 'boolean',
      errorHandlersShrink: 'string',
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfigShrink: 'string',
      severity: 'string',
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

