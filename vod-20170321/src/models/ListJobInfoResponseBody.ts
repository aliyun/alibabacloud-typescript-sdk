// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfoResponseBodyJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2024-10-14T07:39:34Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created, in UTC. Format: YYYY-MM-DDTHH:MM:SSZ.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 5c9dff751ba**********59d50a967f5
   */
  jobId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * TranscodeSuccess
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user who initiated the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      jobId: 'JobId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      jobId: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The historical task list within the last 6 months.
   */
  jobInfoList?: ListJobInfoResponseBodyJobInfoList[];
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - transcode
   * 
   * - snapshot
   * 
   * - ai
   * 
   * @example
   * transcode
   */
  jobType?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  mediaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6708D849-F109-1A6C-AC91-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'JobInfoList',
      jobType: 'JobType',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobInfoResponseBodyJobInfoList },
      jobType: 'string',
      mediaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

