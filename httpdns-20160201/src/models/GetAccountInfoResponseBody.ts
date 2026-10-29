// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountInfoResponseBodyAccountInfo extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1337****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether the DNS over HTTPS (DoH) feature is enabled.
   * 
   * @example
   * true
   */
  dohEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether DoH is used to resolve all domain names.
   * 
   * @example
   * true
   */
  dohResolveAllEnabled?: boolean;
  /**
   * @remarks
   * The number of DoH resolutions for the current month.
   * 
   * @example
   * 10000
   */
  monthDohResolveCount?: number;
  /**
   * @remarks
   * The monthly free resolution quota. This is the number of times you can call the HTTPDNS service for domain name resolution free of charge each calendar month.
   * 
   * @example
   * 1500000
   */
  monthFreeCount?: number;
  /**
   * @remarks
   * The number of HTTP AES-encrypted resolutions for the current month.
   * 
   * @example
   * 0
   */
  monthHttpAesResolveCount?: number;
  /**
   * @remarks
   * The number of HTTPS AES-encrypted resolutions for the current month.
   * 
   * @example
   * 0
   */
  monthHttpsAesResolveCount?: number;
  /**
   * @remarks
   * The total number of HTTPS resolutions for the current month.
   * 
   * @example
   * 3
   */
  monthHttpsResolveCount?: number;
  /**
   * @remarks
   * The total number of HTTP resolutions for the current month.
   * 
   * @example
   * 9927326
   */
  monthResolveCount?: number;
  /**
   * @remarks
   * The number of resource plans. This is a legacy field and is always set to 0.
   * 
   * @example
   * 0
   */
  packageCount?: number;
  /**
   * @remarks
   * The signing secret.
   * 
   * @example
   * 50F9C40E****
   */
  signSecret?: string;
  /**
   * @remarks
   * The number of requests to authenticated API operations.
   * 
   * @example
   * 611523
   */
  signedCount?: number;
  /**
   * @remarks
   * The number of requests to unauthenticated API operations.
   * 
   * @example
   * 1523
   */
  unsignedCount?: number;
  /**
   * @remarks
   * Indicates whether unauthenticated API operations are enabled.
   * 
   * @example
   * true
   */
  unsignedEnabled?: boolean;
  /**
   * @remarks
   * The HTTPDNS account status code. Valid values:
   * - 1: The account is normal.
   * - 2: The account has an overdue payment.
   * - 3: The account is suspended.
   * 
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
  /**
   * @remarks
   * The current account information.
   */
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  /**
   * @remarks
   * The request ID.
   * 
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

