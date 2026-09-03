// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersPasswordResponseBodyDesktopUsers extends $dara.Model {
  /**
   * @remarks
   * The display name of the account in the cloud computer image.
   * 
   * @example
   * demo_user01_1488****
   */
  displayName?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * demo_user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The password of the account in the cloud computer image.
   * 
   * @example
   * 3q8p-NDey-2Nac-TWcQ-****
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
   * The list of accounts in the cloud computer image.
   */
  desktopUsers?: DescribeUsersPasswordResponseBodyDesktopUsers[];
  /**
   * @remarks
   * The request ID.
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

