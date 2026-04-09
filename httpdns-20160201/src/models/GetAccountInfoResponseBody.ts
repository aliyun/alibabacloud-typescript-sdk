// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountInfoResponseBodyAccountInfo extends $dara.Model {
  /**
   * @example
   * 1337****
   */
  accountId?: string;
  dohEnabled?: boolean;
  dohResolveAllEnabled?: boolean;
  monthDohResolveCount?: number;
  /**
   * @example
   * 1500000
   */
  monthFreeCount?: number;
  monthHttpAesResolveCount?: number;
  monthHttpsAesResolveCount?: number;
  /**
   * @example
   * 3
   */
  monthHttpsResolveCount?: number;
  /**
   * @example
   * 9927326
   */
  monthResolveCount?: number;
  /**
   * @example
   * 0
   */
  packageCount?: number;
  /**
   * @example
   * 50F9C40E****
   */
  signSecret?: string;
  /**
   * @example
   * 611523
   */
  signedCount?: number;
  /**
   * @example
   * 1523
   */
  unsignedCount?: number;
  /**
   * @example
   * true
   */
  unsignedEnabled?: boolean;
  /**
   * @example
   * 1
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dohEnabled: 'DohEnabled',
      dohResolveAllEnabled: 'DohResolveAllEnabled',
      monthDohResolveCount: 'MonthDohResolveCount',
      monthFreeCount: 'MonthFreeCount',
      monthHttpAesResolveCount: 'MonthHttpAesResolveCount',
      monthHttpsAesResolveCount: 'MonthHttpsAesResolveCount',
      monthHttpsResolveCount: 'MonthHttpsResolveCount',
      monthResolveCount: 'MonthResolveCount',
      packageCount: 'PackageCount',
      signSecret: 'SignSecret',
      signedCount: 'SignedCount',
      unsignedCount: 'UnsignedCount',
      unsignedEnabled: 'UnsignedEnabled',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dohEnabled: 'boolean',
      dohResolveAllEnabled: 'boolean',
      monthDohResolveCount: 'number',
      monthFreeCount: 'number',
      monthHttpAesResolveCount: 'number',
      monthHttpsAesResolveCount: 'number',
      monthHttpsResolveCount: 'number',
      monthResolveCount: 'number',
      packageCount: 'number',
      signSecret: 'string',
      signedCount: 'number',
      unsignedCount: 'number',
      unsignedEnabled: 'boolean',
      userStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $dara.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetAccountInfoResponseBodyAccountInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountInfo && typeof (this.accountInfo as any).validate === 'function') {
      (this.accountInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

