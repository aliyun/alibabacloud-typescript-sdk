// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptsRequest extends $dara.Model {
  /**
   * @example
   * cs,qa
   */
  bizTags?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * customer
   */
  promptKey?: string;
  /**
   * @example
   * blur
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'BizTags',
      namespaceId: 'NamespaceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      promptKey: 'PromptKey',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      namespaceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      promptKey: 'string',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

