// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserConfigResponseBodyUser extends $dara.Model {
  /**
   * @example
   * v2
   */
  ctdrVersion?: string;
  /**
   * @example
   * pending
   */
  dataStorageVersion?: string;
  /**
   * @example
   * v2
   */
  upgradeCtdrVersion?: string;
  /**
   * @example
   * v2
   */
  upgradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ctdrVersion: 'CtdrVersion',
      dataStorageVersion: 'DataStorageVersion',
      upgradeCtdrVersion: 'UpgradeCtdrVersion',
      upgradeStatus: 'UpgradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ctdrVersion: 'string',
      dataStorageVersion: 'string',
      upgradeCtdrVersion: 'string',
      upgradeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  user?: GetUserConfigResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserConfigResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

