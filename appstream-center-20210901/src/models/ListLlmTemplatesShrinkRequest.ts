// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. This parameter is required when SmartModel is set to true.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The display language of the model. Valid values:
   * - zh-CN: Simplified Chinese.
   * - en-US: English.
   * - ja-JP: Japanese.
   * - zh-TW: Traditional Chinese.
   * Default value: zh-CN. Currently, zh-TW returns Simplified Chinese, and ja-JP returns English. If the model is not included in Alibaba Cloud Model Studio or the English text is missing, the original source text is retained without automatic translation.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The model code for filtering. Fuzzy match is supported.
   * 
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The model template IDs for filtering.
   */
  llmTemplateIdsShrink?: string;
  /**
   * @remarks
   * The associated model group ID.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. A value of 0 returns the same result as 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The model provider template ID.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  /**
   * @remarks
   * Specifies whether to query smart models. Valid values:
   * - true: Only LLMs under system-preset smart models are returned. In this case, BizType is required.
   * - false: Smart models are not specifically filtered.
   * Default value: false.
   * 
   * @example
   * false
   */
  smartModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      language: 'Language',
      llmCode: 'LlmCode',
      llmTemplateIdsShrink: 'LlmTemplateIds',
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerTemplateId: 'ProviderTemplateId',
      smartModel: 'SmartModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      language: 'string',
      llmCode: 'string',
      llmTemplateIdsShrink: 'string',
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerTemplateId: 'string',
      smartModel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

