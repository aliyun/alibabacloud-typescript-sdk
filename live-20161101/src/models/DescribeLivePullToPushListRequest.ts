// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushListRequest extends $dara.Model {
  /**
   * @remarks
   * Destination push stream URL. Fuzzy search based on destination push stream URL.
   * 
   * @example
   * rtmp://qd
   */
  dstUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number.
   * > The value of this parameter must be greater than 0 and cannot exceed the maximum value of Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records displayed per page.
   * > Default value: 10. Value range: [1, 100].
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the live center for query. Valid values:
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Task ID. Fuzzy search based on task ID.
   * > The task ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 55 characters.
   * 
   * @example
   * 861009
   */
  taskId?: string;
  /**
   * @remarks
   * Task name. Fuzzy search based on task name.
   * 
   * @example
   * task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dstUrl: 'DstUrl',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstUrl: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      taskId: 'string',
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

