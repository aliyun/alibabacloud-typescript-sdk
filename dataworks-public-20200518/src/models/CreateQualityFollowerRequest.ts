// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values: 1, 2, 4, 5, 6, 7, 8, and 9. The value 1 indicates that the notification is sent by email. The value 2 indicates that the notification is sent by email and text message. The value 4 indicates that the notification is sent by a DingTalk chatbot. The value 5 indicates that the notification is sent by a DingTalk chatbot to all members in a DingTalk group. The value 6 indicates that the notification is sent by Lark. The value 7 indicates that the notification is sent by WeCom. The value 8 indicates that the notification is sent by webhook. The value 9 indicates that the notification is sent by phone call.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alarmMode?: number;
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The account ID of the subscriber.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  follower?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console to query the ID.
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
      entityId: 'EntityId',
      follower: 'Follower',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      entityId: 'number',
      follower: 'string',
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

