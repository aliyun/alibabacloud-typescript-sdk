// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnrolledAccountsResponseBodyEnrolledAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 19534534552*****
   */
  accountUid?: number;
  /**
   * @remarks
   * The ID of the baseline that is applied.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * TestAccount
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * @example
   * 13161210500*****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The enrollment status. Valid values:
   * 
   * - Pending: The account is waiting to be enrolled.
   * 
   * - Running: The account is being enrolled.
   * 
   * - Finished: The account is enrolled.
   * 
   * - Failed: The account failed to be enrolled.
   * 
   * - Scheduling: The account is being scheduled.
   * 
   * - ScheduleFailed: The account failed to be scheduled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      createTime: 'string',
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The enrolled accounts.
   */
  enrolledAccounts?: ListEnrolledAccountsResponseBodyEnrolledAccounts[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enrolledAccounts: 'EnrolledAccounts',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrolledAccounts: { 'type': 'array', 'itemType': ListEnrolledAccountsResponseBodyEnrolledAccounts },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enrolledAccounts)) {
      $dara.Model.validateArray(this.enrolledAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

