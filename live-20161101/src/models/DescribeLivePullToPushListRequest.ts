// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushListRequest extends $dara.Model {
  /**
   * @remarks
   * The destination URL. Fuzzy search is performed based on the destination URL.
   * 
   * @example
   * rtmp://qd
   */
  dstUrl?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * >  The value must be greater than 0 and not greater than the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * >  Valid values: [1,100]. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the live center. Valid values:
   * 
   * *   ap-southeast-1: Singapore
   * *   ap-southeast-5: Indonesia (Jakarta)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The task ID. Fuzzy search is performed based on the task ID.
   * 
   * >  The ID can be up to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
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

