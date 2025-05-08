// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserDeliveryTasksResponseBodyTasks } from "./ListUserDeliveryTasksResponseBodyTasks";


export class ListUserDeliveryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
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
   * The request ID.
   * 
   * @example
   * 1f94c47f-3a1a-4f69-8d6c-bfeee1b49aab
   */
  requestId?: string;
  /**
   * @remarks
   * The delivery tasks.
   */
  tasks?: ListUserDeliveryTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of delivery tasks.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListUserDeliveryTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

