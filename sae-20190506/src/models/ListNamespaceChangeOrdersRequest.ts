// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The change order status. Valid values:
   * 
   * - **0**: Preparing.
   * 
   * - **1**: Executing.
   * 
   * - **2**: Succeeded.
   * 
   * - **3**: Failed.
   * 
   * - **6**: Terminated.
   * 
   * - **10**: System Error.
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * The change order type. Valid values:
   * 
   * - **CoBatchStartApplication**: Batch Start Application.
   * 
   * - **CoBatchStopApplication**: Batch Stop Application.
   * 
   * @example
   * CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A keyword for a fuzzy search of change order descriptions. Change orders whose descriptions contain this **key** are returned.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The page size.
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

