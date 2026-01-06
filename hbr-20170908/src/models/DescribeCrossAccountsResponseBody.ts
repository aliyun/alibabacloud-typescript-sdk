// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount extends $dara.Model {
  /**
   * @remarks
   * The account alias. The value can be up to 32 bits in length.
   * 
   * @example
   * content
   */
  alias?: string;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1654570439
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 15897534xxxxx625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The ID of the backup type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the current account.
   * 
   * @example
   * 184164xxxxx49795
   */
  ownerId?: number;
  /**
   * @remarks
   * The time when the account information was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1640157098
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      id: 'Id',
      ownerId: 'OwnerId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      id: 'number',
      ownerId: 'number',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBodyCrossAccounts extends $dara.Model {
  crossAccount?: DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount[];
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: { 'type': 'array', 'itemType': DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount },
    };
  }

  validate() {
    if(Array.isArray(this.crossAccount)) {
      $dara.Model.validateArray(this.crossAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the accounts used in cross-account backup.
   */
  crossAccounts?: DescribeCrossAccountsResponseBodyCrossAccounts;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      crossAccounts: 'CrossAccounts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      crossAccounts: DescribeCrossAccountsResponseBodyCrossAccounts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.crossAccounts && typeof (this.crossAccounts as any).validate === 'function') {
      (this.crossAccounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

