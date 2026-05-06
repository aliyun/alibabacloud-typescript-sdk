// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesShrinkRequest extends $dara.Model {
  /**
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  llmTemplateIdsShrink?: string;
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

