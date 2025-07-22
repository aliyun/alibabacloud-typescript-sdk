// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

export class RemoveUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: RemoveUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersResponseBodyUsers },
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

