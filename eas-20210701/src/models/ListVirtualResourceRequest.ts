// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * - Desc: descending order.
   * - Asc: ascending order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the virtual resource group list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of virtual resource groups to display per page in a paged query. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Results are sorted by timestamp in descending order by default.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The virtual resource group ID.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The virtual resource group name.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

