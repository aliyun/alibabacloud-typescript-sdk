// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesRequest extends $dara.Model {
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
   * The model code used for filtering. Fuzzy match is supported.
   * 
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The model template IDs used for filtering.
   */
  llmTemplateIds?: string[];
  /**
   * @remarks
   * The ID of the associated model group.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Both 0 and 1 return the same result.
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
   * The ID of the model provider template.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  /**
   * @remarks
   * Specifies whether to query smart models. Valid values:
   * 
   * - true: Only LLMs under system preset smart models are returned. In this case, BizType is required.
   * - false: Smart model filtering is not applied.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  smartModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      llmCode: 'LlmCode',
      llmTemplateIds: 'LlmTemplateIds',
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
      llmCode: 'string',
      llmTemplateIds: { 'type': 'array', 'itemType': 'string' },
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerTemplateId: 'string',
      smartModel: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.llmTemplateIds)) {
      $dara.Model.validateArray(this.llmTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

