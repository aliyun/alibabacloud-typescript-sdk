// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderLlmCodesRequest extends $dara.Model {
  /**
   * @remarks
   * The display language of the model. Valid values: zh-CN (Simplified Chinese), en-US (English), ja-JP (Japanese), and zh-TW (Traditional Chinese). Default value: zh-CN. Currently, zh-TW returns Simplified Chinese, and ja-JP returns English. If the model is not included in Model Studio or the English text is missing, the original source text is retained without automatic translation.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The LLM code used for fuzzy match filtering.
   * 
   * @example
   * qwen3-max
   */
  llmCode?: string;
  /**
   * @remarks
   * The list of model brands in a JSON array string. Supports multi-select filtering. Models matching any of the specified brands are returned.
   */
  modelBrands?: string[];
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 1000. Maximum value: 1000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * moonshot
   */
  providerName?: string;
  /**
   * @remarks
   * The ID of the provider template.
   * 
   * This parameter is required.
   * 
   * @example
   * pt-xxx-001
   */
  providerTemplateId?: string;
  /**
   * @remarks
   * Specifies whether to filter models by recommendation status. If this parameter is not specified, models are not filtered by recommendation status.
   */
  recommended?: boolean;
  /**
   * @remarks
   * The list of recommendation levels. This parameter takes effect only for wuying-plan. Models matching any of the specified levels and meeting other filter conditions such as region and brand are returned. If this parameter is not specified or an empty array is passed, models are not filtered by recommendation level.
   * 
   * @example
   * ["Standard","Advanced"]
   */
  recommendedLevels?: string[];
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      llmCode: 'LlmCode',
      modelBrands: 'ModelBrands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerName: 'ProviderName',
      providerTemplateId: 'ProviderTemplateId',
      recommended: 'Recommended',
      recommendedLevels: 'RecommendedLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      llmCode: 'string',
      modelBrands: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      providerName: 'string',
      providerTemplateId: 'string',
      recommended: 'boolean',
      recommendedLevels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelBrands)) {
      $dara.Model.validateArray(this.modelBrands);
    }
    if(Array.isArray(this.recommendedLevels)) {
      $dara.Model.validateArray(this.recommendedLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

