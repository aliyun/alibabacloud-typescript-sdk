// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfoResponseBodyJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * 2024-10-14T07:39:34Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 5c9dff751ba**********59d50a967f5
   */
  jobId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * TranscodeSuccess
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user who submitted the task.
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
   * The historical tasks of the last 6 months.
   */
  jobInfoList?: ListJobInfoResponseBodyJobInfoList[];
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   transcode
   * *   snapshot
   * *   ai
   * 
   * @example
   * transcode
   */
  jobType?: string;
  /**
   * @remarks
   * The ID of the media asset.
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

