// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSiteDeliveryTasksResponseBodyTasks } from "./ListSiteDeliveryTasksResponseBodyTasks";


export class ListSiteDeliveryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 0.
   * 
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 500**. Default value: **20**.
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
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  /**
   * @remarks
   * The delivery tasks.
   */
  tasks?: ListSiteDeliveryTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of log delivery tasks.
   * 
   * @example
   * 20
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
      tasks: { 'type': 'array', 'itemType': ListSiteDeliveryTasksResponseBodyTasks },
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

