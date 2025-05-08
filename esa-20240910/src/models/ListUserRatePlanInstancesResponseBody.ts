// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserRatePlanInstancesResponseBodyInstanceInfo } from "./ListUserRatePlanInstancesResponseBodyInstanceInfo";


export class ListUserRatePlanInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried plans.
   */
  instanceInfo?: ListUserRatePlanInstancesResponseBodyInstanceInfo[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListUserRatePlanInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

