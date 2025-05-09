// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUpstreamTasksResponseBodyPagingInfoTasks } from "./ListUpstreamTasksResponseBodyPagingInfoTasks";
import { ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks } from "./ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks";


export class ListUpstreamTasksResponseBodyPagingInfo extends $dara.Model {
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
   * The tasks. This parameter is deprecated and replaced by the UpstreamTasks parameter.
   */
  tasks?: ListUpstreamTasksResponseBodyPagingInfoTasks[];
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
   * The ancestor tasks.
   */
  upstreamTasks?: ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tasks: { 'type': 'array', 'itemType': ListUpstreamTasksResponseBodyPagingInfoTasks },
      totalCount: 'number',
      upstreamTasks: { 'type': 'array', 'itemType': ListUpstreamTasksResponseBodyPagingInfoUpstreamTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(Array.isArray(this.upstreamTasks)) {
      $dara.Model.validateArray(this.upstreamTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

