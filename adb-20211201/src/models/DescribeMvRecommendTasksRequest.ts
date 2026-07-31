// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMvRecommendTasksRequest extends $dara.Model {
  /**
   * @remarks
   * A static field. This parameter cannot be modified.
   * 
   * @example
   * Modification is not supported.
   */
  actionInner?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * A static field. This parameter cannot be modified.
   * 
   * @example
   * Modification is not supported.
   */
  from?: string;
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
   * The name of the materialized view recommendation task.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInner: 'string',
      DBClusterId: 'string',
      from: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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

