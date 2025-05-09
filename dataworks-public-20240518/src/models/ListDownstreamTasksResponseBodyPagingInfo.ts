// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks } from "./ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks";
import { ListDownstreamTasksResponseBodyPagingInfoTasks } from "./ListDownstreamTasksResponseBodyPagingInfoTasks";


export class ListDownstreamTasksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The descendant tasks.
   */
  downstreamTasks?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks[];
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
   * The tasks. This parameter is deprecated and replaced by the DownstreamTasks parameter.
   */
  tasks?: ListDownstreamTasksResponseBodyPagingInfoTasks[];
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
      downstreamTasks: 'DownstreamTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downstreamTasks: { 'type': 'array', 'itemType': ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks },
      pageNumber: 'number',
      pageSize: 'number',
      tasks: { 'type': 'array', 'itemType': ListDownstreamTasksResponseBodyPagingInfoTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.downstreamTasks)) {
      $dara.Model.validateArray(this.downstreamTasks);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

