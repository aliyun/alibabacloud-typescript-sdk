// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human.
   * 
   * @example
   * This is a digital human, intended for use in a certain scenario.
   */
  avatarDescription?: string;
  /**
   * @remarks
   * The ID of the digital human.
   * 
   * @example
   * Avatar-XXX
   */
  avatarId?: string;
  /**
   * @remarks
   * The name of the digital human.
   * 
   * @example
   * The name of the digital human.
   */
  avatarName?: string;
  /**
   * @remarks
   * The type of the digital human.
   * 
   * @example
   * 2DAvatar
   */
  avatarType?: string;
  /**
   * @remarks
   * The time when the task was created, in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the training was first initiated, in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  firstTrainingTime?: string;
  /**
   * @remarks
   * The ID of the digital human training task.
   * 
   * @example
   * *****aded114489ea02e0addf93*****
   */
  jobId?: string;
  /**
   * @remarks
   * The time of the most recent training, in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  lastTrainingTime?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Training successful
   */
  message?: string;
  /**
   * @remarks
   * The media asset ID of the profile picture.
   * 
   * @example
   * *****aded114489ea02e0addf93*****
   */
  portrait?: string;
  /**
   * @remarks
   * The status of the digital human training task.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarDescription: 'AvatarDescription',
      avatarId: 'AvatarId',
      avatarName: 'AvatarName',
      avatarType: 'AvatarType',
      createTime: 'CreateTime',
      firstTrainingTime: 'FirstTrainingTime',
      jobId: 'JobId',
      lastTrainingTime: 'LastTrainingTime',
      message: 'Message',
      portrait: 'Portrait',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarDescription: 'string',
      avatarId: 'string',
      avatarName: 'string',
      avatarType: 'string',
      createTime: 'string',
      firstTrainingTime: 'string',
      jobId: 'string',
      lastTrainingTime: 'string',
      message: 'string',
      portrait: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarTrainingJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of digital human training tasks.
   */
  avatarTrainingJobList?: ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      avatarTrainingJobList: 'AvatarTrainingJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarTrainingJobList: { 'type': 'array', 'itemType': ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.avatarTrainingJobList)) {
      $dara.Model.validateArray(this.avatarTrainingJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvatarTrainingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListAvatarTrainingJobsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: successful
   * - false: failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAvatarTrainingJobsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

