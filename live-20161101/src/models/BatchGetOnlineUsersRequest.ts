// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetOnlineUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the message group.
   * 
   * This parameter is required.
   * 
   * @example
   * 23wcaec-***695ef
   */
  groupId?: string;
  /**
   * @remarks
   * The list of user IDs. Separate multiple user IDs with commas (,). You can specify a maximum of 20 user IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * de1**a0,hu**9
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

