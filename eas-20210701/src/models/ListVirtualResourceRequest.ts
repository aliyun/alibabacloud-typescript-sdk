// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - Desc: Descending order.
   * 
   * - Asc: Ascending order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number for the list of virtual resource groups. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of virtual resource groups to display on each page. The default value is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that is used to sort the results. By default, the results are sorted by timestamp in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
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

