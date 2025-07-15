// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPreloadTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-06-30T19:00:00Z. The interval between the start time and end time cannot exceed three days.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The streaming URL. You can specify up to 100 streaming URLs in a request. Separate multiple streaming URLs with commas (,).
   */
  playUrl?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-06-29T19:00:00Z. You can query only data in the previous three days.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the prefetch task. Valid values:
   * 
   * *   complete
   * *   pending
   * *   preloading
   * *   failed
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The ID of the prefetch task. The task ID is returned when you call the [SetLiveStreamPreloadTasks](https://help.aliyun.com/document_detail/2519938.html) operation to configure the prefetch task.
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

