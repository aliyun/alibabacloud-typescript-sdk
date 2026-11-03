// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespaceChangeOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * - **0**: preparing
   * - **1**: executing
   * - **2**: succeeded
   * - **3**: failed
   * - **6**: terminated
   * - **10**: failed due to a system exception
   * 
   * @example
   * 2
   */
  coStatus?: string;
  /**
   * @remarks
   * The type of the change order. Valid values:
   * 
   * - **CoBatchStartApplication**: Starts applications in batches.
   * - **CoBatchStopApplication**: Stops applications in batches.
   * 
   * @example
   * CoBatchStartApplication
   */
  coType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword used for fuzzy matching of the change order description. All change orders whose descriptions contain this **key** are returned.
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
   * The number of entries per page.
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

