// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * - 1: email.
   * - 2: email and text message.
   * - 4: DingTalk chatbot.
   * - 5: DingTalk chatbot @ALL.
   * - 6: Lark.
   * - 7: WeCom.
   * - 8: WEBHOOK.
   * - 9: phone call alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alarmMode?: number;
  /**
   * @remarks
   * The ID of the partition expression.
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
   * The ID of the DataWorks workspace. You can obtain the ID from the DataWorks console.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source.
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

