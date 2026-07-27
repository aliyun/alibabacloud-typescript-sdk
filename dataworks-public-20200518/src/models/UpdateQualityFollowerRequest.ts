// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values: 1 (email), 2 (email and SMS), 4 (DingTalk group chatbot), 5 (DingTalk group chatbot with an @all reminder), 6 (Lark), 7 (WeCom), 8 (webhook), and 9 (phone call).
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  alarmMode?: number;
  /**
   * @remarks
   * The subscriber.
   * 
   * This parameter is required.
   * 
   * @example
   * 1912232****
   */
  follower?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  followerId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console to obtain the ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMode: 'AlarmMode',
      follower: 'Follower',
      followerId: 'FollowerId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      follower: 'string',
      followerId: 'number',
      projectId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

