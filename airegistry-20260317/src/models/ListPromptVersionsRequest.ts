// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      promptKey: 'PromptKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      promptKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

