// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersRequest extends $dara.Model {
  filePath?: string;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  notificationEmail?: string;
  /**
   * @example
   * ["agent1@ccc-test","agent2@ccc-test"]
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      force: 'Force',
      instanceId: 'InstanceId',
      notificationEmail: 'NotificationEmail',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      force: 'boolean',
      instanceId: 'string',
      notificationEmail: 'string',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

