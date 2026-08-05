// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the task is a scheduled scan task.
   * 
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * 1
   */
  mediaType?: number;
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The sort field.
   */
  sortShrink?: string;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortShrink: 'Sort',
      startTime: 'StartTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortShrink: 'string',
      startTime: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

