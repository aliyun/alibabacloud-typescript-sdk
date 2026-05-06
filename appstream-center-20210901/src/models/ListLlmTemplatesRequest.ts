// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesRequest extends $dara.Model {
  /**
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  llmTemplateIds?: string[];
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      llmCode: 'LlmCode',
      llmTemplateIds: 'LlmTemplateIds',
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmCode: 'string',
      llmTemplateIds: { 'type': 'array', 'itemType': 'string' },
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerTemplateId: 'string',
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

