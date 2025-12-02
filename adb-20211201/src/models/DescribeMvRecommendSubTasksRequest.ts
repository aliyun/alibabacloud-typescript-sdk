// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMvRecommendSubTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Fixed system value (non-modifiable).
   */
  actionInner?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Fixed system value (non-modifiable).
   */
  from?: string;
  /**
   * @remarks
   * The sorting field. Valid values for Type:
   * 
   * *   Asc.
   * *   Desc.
   * 
   * Valid values for Field:
   * 
   * *   StartTime;
   * *   EndTime;
   * 
   * @example
   * {\\"Type\\": \\"ASC\\", \\"Field\\": \\"StartTime\\"}
   */
  orderBy?: string;
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
   * The number of entries to return per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * 123
   */
  subtaskId?: number;
  /**
   * @remarks
   * The name of the recommendation task.
   * 
   * @example
   * my_task_1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      actionInner: 'ActionInner',
      DBClusterId: 'DBClusterId',
      from: 'From',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      subtaskId: 'SubtaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInner: 'string',
      DBClusterId: 'string',
      from: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      subtaskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

