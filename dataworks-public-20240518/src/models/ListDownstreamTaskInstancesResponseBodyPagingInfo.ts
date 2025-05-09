// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstances } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstances";
import { ListDownstreamTaskInstancesResponseBodyPagingInfoTaskInstances } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoTaskInstances";


export class ListDownstreamTaskInstancesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The descendant instances.
   */
  downstreamTaskInstances?: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstances[];
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
   * The instances. This parameter is deprecated and replaced by the DownstreamTaskInstances parameter.
   */
  taskInstances?: ListDownstreamTaskInstancesResponseBodyPagingInfoTaskInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      downstreamTaskInstances: 'DownstreamTaskInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskInstances: 'TaskInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamTaskInstances: { 'type': 'array', 'itemType': ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstances },
      pageNumber: 'number',
      pageSize: 'number',
      taskInstances: { 'type': 'array', 'itemType': ListDownstreamTaskInstancesResponseBodyPagingInfoTaskInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.downstreamTaskInstances)) {
      $dara.Model.validateArray(this.downstreamTaskInstances);
    }
    if(Array.isArray(this.taskInstances)) {
      $dara.Model.validateArray(this.taskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

