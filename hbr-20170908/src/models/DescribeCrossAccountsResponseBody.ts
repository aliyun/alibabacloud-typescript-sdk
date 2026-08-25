// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossAccountsResponseBodyCrossAccountsCrossAccount extends $dara.Model {
  alias?: string;
  createdTime?: number;
  crossAccountRoleName?: string;
  /**
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  crossAccountUserId?: number;
  id?: number;
  ownerId?: number;
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
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  crossAccounts?: DescribeCrossAccountsResponseBodyCrossAccounts;
  /**
   * @remarks
   * A description of the response. Successful requests return "successful". Failed requests return an error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number for paging. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
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
   * Indicates whether the request succeeded.
   * 
   * - true: succeeded
   * 
   * - false: failed
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
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

