// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesShrinkRequest extends $dara.Model {
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
  llmTemplateIdsShrink?: string;
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
   * The page number. Pages start from page 1. Values 0 and 1 return the same result.
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
  static names(): { [key: string]: string } {
    return {
      llmCode: 'LlmCode',
      llmTemplateIdsShrink: 'LlmTemplateIds',
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmCode: 'string',
      llmTemplateIdsShrink: 'string',
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

