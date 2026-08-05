// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPreloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time in ISO 8601 format in UTC. Format: yyyy-MM-ddTHH:mm:ssZ. The interval between EndTime and StartTime cannot exceed 3 days.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Valid values: any integer from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The live streaming URL. You can specify multiple URLs separated by commas (,), up to 100.
   */
  playUrl?: string;
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
   * The start time in ISO 8601 format in UTC. Format: yyyy-MM-ddTHH:mm:ssZ. The start time must be within the last 3 days.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - complete: completed.
   * - pending: waiting for preload.
   * - preloading: preloading in progress.
   * - failed: preload failed.
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can obtain the preload task ID by calling the [SetLiveStreamPreloadTasks](https://help.aliyun.com/document_detail/2519938.html) operation.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      playUrl: 'PlayUrl',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      playUrl: 'string',
      regionId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

