// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ObjectKey of the OSS object containing the file with the list of users to delete.
   * 
   * @example
   * temp/removeUsers.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * Specifies whether to force delete.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Notification email address.
   * 
   * @example
   * 123@abc.com
   */
  notificationEmail?: string;
  /**
   * @remarks
   * A JSON-formatted string representing an array of agent IDs. Each array element is an agent ID.
   * 
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

