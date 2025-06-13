// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-06-18 02:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2023-06-17 02:08:00
   */
  startTime?: string;
  /**
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
      sort: 'Sort',
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
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startTime: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

