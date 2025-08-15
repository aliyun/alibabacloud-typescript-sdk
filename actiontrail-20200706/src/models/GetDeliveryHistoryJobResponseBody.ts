// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeliveryHistoryJobResponseBodyStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The task status in each region. Valid values:
   * 
   * *   0: The task is initializing.
   * *   1: The task is delivering historical events.
   * *   2: The task is complete.
   * *   3: The task fails.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryHistoryJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-05-27T07:15:03Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2021-05-27T07:20:03Z
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
   * The ID of the task.
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
   * The ID of the request.
   * 
   * @example
   * FAFEC427-A00D-5653-B837-D0FA52220D8C
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2021-02-26T07:15:03Z
   */
  startTime?: string;
  /**
   * @remarks
   * A list of task statuses in each region.
   */
  status?: GetDeliveryHistoryJobResponseBodyStatus[];
  /**
   * @remarks
   * The name of the trail based on which the task delivers events.
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
   * 2021-05-27T07:28:47Z
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      homeRegion: 'HomeRegion',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
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
      requestId: 'string',
      startTime: 'string',
      status: { 'type': 'array', 'itemType': GetDeliveryHistoryJobResponseBodyStatus },
      trailName: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

