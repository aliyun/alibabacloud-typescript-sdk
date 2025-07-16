// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualResourceResponseBodyVirtualResources extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual resource group was created.
   * 
   * @example
   * 2024-10-16T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of deployed services.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The time when the virtual resource group was last updated.
   * 
   * @example
   * 2024-10-16T19:52:49Z
   */
  updateTime?: string;
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
      createTime: 'CreateTime',
      serviceCount: 'ServiceCount',
      updateTime: 'UpdateTime',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      serviceCount: 'number',
      updateTime: 'string',
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

