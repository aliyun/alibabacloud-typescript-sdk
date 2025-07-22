// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  users?: RemoveUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

