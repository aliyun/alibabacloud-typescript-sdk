// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesResponseBodyDevicesEndUserList extends $dara.Model {
  /**
   * @remarks
   * The address of the AD office network.
   * 
   * @example
   * xn--0zw****
   */
  adDomain?: string;
  /**
   * @remarks
   * The ID of the convenient office network.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * moli
   */
  endUserId?: string;
  /**
   * @remarks
   * The account type of the user.
   * 
   * Valid values:
   * 
   * *   AD: enterprise AD account.
   * *   SIMPLE: convenience account
   * 
   * @example
   * SIMPLE
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

