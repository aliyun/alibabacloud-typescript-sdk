// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList extends $dara.Model {
  /**
   * @remarks
   * The description of the digital human.
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
   * *   The time when the job was created.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * *   The time when the first training was initiated.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  firstTrainingTime?: string;
  /**
   * @remarks
   * The ID of the digital human training job.
   * 
   * @example
   * *****aded114489ea02e0addf93*****
   */
  jobId?: string;
  /**
   * @remarks
   * *   The time when the last training was initiated.
   * *   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-23T13:33:40Z
   */
  lastTrainingTime?: string;
  /**
   * @remarks
   * The status description.
   */
  message?: string;
  /**
   * @remarks
   * The media asset ID of the portrait image.
   * 
   * @example
   * *****aded114489ea02e0addf93*****
   */
  portrait?: string;
  /**
   * @remarks
   * The state of the digital human training job.
   * 
   * @example
   * Normal
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

