// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptsRequest extends $dara.Model {
  /**
   * @remarks
   * The business tags used to filter prompts. Separate multiple tags with commas (,).
   * 
   * @example
   * cs,qa
   */
  bizTags?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The identifier of the prompt to search for. This parameter is optional.
   * 
   * @example
   * customer
   */
  promptKey?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * - accurate: exact match.
   * - blur: fuzzy match.
   * 
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

