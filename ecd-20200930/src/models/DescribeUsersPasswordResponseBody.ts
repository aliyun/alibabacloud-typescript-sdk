// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersPasswordResponseBodyDesktopUsers extends $dara.Model {
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * alice_1365*****
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The password of the end user.
   * 
   * @example
   * tes123
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUserId: 'EndUserId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUserId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized users of the cloud computer.
   */
  desktopUsers?: DescribeUsersPasswordResponseBodyDesktopUsers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F7B4B17B-5C8A-514C-AA4D-F8090E3A63E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopUsers: 'DesktopUsers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopUsers: { 'type': 'array', 'itemType': DescribeUsersPasswordResponseBodyDesktopUsers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopUsers)) {
      $dara.Model.validateArray(this.desktopUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

