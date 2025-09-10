// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualResourceRequest extends $dara.Model {
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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

