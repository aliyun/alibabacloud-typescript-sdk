// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of an application.
   * 
   * @example
   * bbf3a590-6d13-46fe-8ca9-c947a20b****
   */
  appId?: string;
  currentPage?: number;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  namespaceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      namespaceId: 'NamespaceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      namespaceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

