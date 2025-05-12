// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualResourceResponseBodyVirtualResources } from "./ListVirtualResourceResponseBodyVirtualResources";


export class ListVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The virtual resource groups.
   */
  virtualResources?: ListVirtualResourceResponseBodyVirtualResources[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualResources: 'VirtualResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualResources: { 'type': 'array', 'itemType': ListVirtualResourceResponseBodyVirtualResources },
    };
  }

  validate() {
    if(Array.isArray(this.virtualResources)) {
      $dara.Model.validateArray(this.virtualResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

