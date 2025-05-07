// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * 2
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * CoBatchStartApplication
   * 
   * @example
   * CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * 1
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * test
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * cn-shanghai:test
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * 20
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      namespaceId: 'NamespaceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
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

