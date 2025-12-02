// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMVRecommendResultsRequest extends $dara.Model {
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
   * The sorting field.
   * 
   * @example
   * {"Type": "Desc","Field": "AcceleratedQueriesCount"}
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
   * @example
   * 123
   */
  subQueryId?: number;
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
   * task_n1
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
      subQueryId: 'SubQueryId',
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
      subQueryId: 'number',
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

