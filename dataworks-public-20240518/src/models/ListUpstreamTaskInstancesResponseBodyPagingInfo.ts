// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUpstreamTaskInstancesResponseBodyPagingInfoTaskInstances } from "./ListUpstreamTaskInstancesResponseBodyPagingInfoTaskInstances";
import { ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstances } from "./ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstances";


export class ListUpstreamTaskInstancesResponseBodyPagingInfo extends $dara.Model {
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
   * The instances. This parameter is deprecated and replaced by the UpstreamTaskInstances parameter.
   */
  taskInstances?: ListUpstreamTaskInstancesResponseBodyPagingInfoTaskInstances[];
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
   * The ancestor instances.
   */
  upstreamTaskInstances?: ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstances[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskInstances: 'TaskInstances',
      totalCount: 'TotalCount',
      upstreamTaskInstances: 'UpstreamTaskInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskInstances: { 'type': 'array', 'itemType': ListUpstreamTaskInstancesResponseBodyPagingInfoTaskInstances },
      totalCount: 'number',
      upstreamTaskInstances: { 'type': 'array', 'itemType': ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstances },
    };
  }

  validate() {
    if(Array.isArray(this.taskInstances)) {
      $dara.Model.validateArray(this.taskInstances);
    }
    if(Array.isArray(this.upstreamTaskInstances)) {
      $dara.Model.validateArray(this.upstreamTaskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

