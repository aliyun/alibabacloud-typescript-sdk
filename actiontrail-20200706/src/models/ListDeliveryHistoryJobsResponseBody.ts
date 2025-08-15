// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-04-26T03:17:04Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2021-04-26T03:22:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The home region of the trail.
   * 
   * @example
   * cn-hangzhou
   */
  homeRegion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 16602
   */
  jobId?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   0: The task is initializing.
   * *   1: The task is delivering historical events.
   * *   2: The task is complete.
   * *   3: The task fails.
   * 
   * @example
   * 2
   */
  jobStatus?: number;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2021-01-26T03:17:04Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2021-04-26T03:20:08Z
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      homeRegion: 'HomeRegion',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      startTime: 'StartTime',
      trailName: 'TrailName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'string',
      homeRegion: 'string',
      jobId: 'number',
      jobStatus: 'number',
      startTime: 'string',
      trailName: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryHistoryJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of historical event delivery tasks.
   */
  deliveryHistoryJobs?: ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs[];
  /**
   * @remarks
   * The page number of the returned page.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B190816C-6DCA-4DC5-9B8E-EE0367B57CFF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of historical event delivery tasks returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryHistoryJobs: 'DeliveryHistoryJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryHistoryJobs: { 'type': 'array', 'itemType': ListDeliveryHistoryJobsResponseBodyDeliveryHistoryJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryHistoryJobs)) {
      $dara.Model.validateArray(this.deliveryHistoryJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

