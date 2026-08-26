// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushListRequest extends $dara.Model {
  /**
   * @remarks
   * The destination ingest URL. Fuzzy search is performed based on the destination ingest URL.
   * 
   * @example
   * rtmp://qd
   */
  dstUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * > The value of this parameter must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * > Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The live center to query. Valid values:
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The task ID. Fuzzy search is performed based on the task ID.
   * > The task ID consists of uppercase and lowercase letters, digits, underscores (_), and hyphens (-), with a maximum of 55 characters.
   * 
   * @example
   * 861009
   */
  taskId?: string;
  /**
   * @remarks
   * The task name. Fuzzy search is performed based on the task name.
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

