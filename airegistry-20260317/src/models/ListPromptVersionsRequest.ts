// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptVersionsRequest extends $dara.Model {
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
   * @remarks
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

