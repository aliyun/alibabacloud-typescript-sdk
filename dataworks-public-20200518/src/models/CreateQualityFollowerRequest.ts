// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The alert method. Valid values: 1 (email), 2 (email and SMS), 4 (DingTalk Group Bot), 5 (DingTalk Group Bot with an @all message), 6 (Lark), 7 (WeCom), 8 (webhook), and 9 (Phone Alert).
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
   * The Alibaba Cloud account ID of the follower.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  follower?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. To find the workspace ID, log in to the DataWorks console.
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

