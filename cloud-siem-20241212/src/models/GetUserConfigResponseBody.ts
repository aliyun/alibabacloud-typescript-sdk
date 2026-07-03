// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserConfigResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The current CTDR version.
   * 
   * @example
   * v2
   */
  ctdrVersion?: string;
  /**
   * @remarks
   * The upgrade status. Valid values:
   * 
   * - pending: The upgrade is pending.
   * 
   * - upgrading: The upgrade is in progress.
   * 
   * - success: The upgrade is successful.
   * 
   * - failed: The upgrade failed.
   * 
   * @example
   * pending
   */
  dataStorageVersion?: string;
  /**
   * @remarks
   * The version of Log Management.
   * 
   * @example
   * v2
   */
  upgradeCtdrVersion?: string;
  /**
   * @remarks
   * The target CTDR version for the upgrade.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The user.
   */
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

