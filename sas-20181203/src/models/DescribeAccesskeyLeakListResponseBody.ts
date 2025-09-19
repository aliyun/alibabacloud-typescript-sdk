// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair that is leaked.
   * 
   * @example
   * yourAccessKeyID
   */
  accesskeyId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that is affected.
   * 
   * @example
   * testAccountName
   */
  aliUserName?: string;
  /**
   * @remarks
   * The platform to which the asset belongs. The value is fixed as **Cloud platform**.
   * 
   * @example
   * Cloud platform
   */
  asset?: string;
  /**
   * @remarks
   * The time when the AccessKey pair leak is handled.
   * 
   * @example
   * 2020-12-03 21:23:38
   */
  dealTime?: string;
  /**
   * @remarks
   * The method to handle the AccessKey pair leak. Valid values:
   * 
   * *   **pending**: The AccessKey pair leak is unhandled.
   * *   **manual**: The AccessKey pair leak is manually handled.
   * *   **disable**: The AccessKey pair leak is disabled.
   * *   **add-whitelist**: The AccessKey pair leak is added to the whitelist.
   * 
   * @example
   * pending
   */
  dealType?: string;
  /**
   * @remarks
   * The time when the AccessKey pair leak is first detected. The value of this parameter is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1612357897000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID of the database.
   * 
   * @example
   * 389357
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the AccessKey pair leak is handled. Valid values:
   * 
   * *   **pending**: unhandled
   * *   **dealed**: handled
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The type of the leak. The value is fixed as **AccessKey**.
   * 
   * @example
   * AccessKey
   */
  type?: string;
  /**
   * @remarks
   * The URL of the platform on which the AccessKey pair leak is detected.
   */
  url?: string;
  /**
   * @remarks
   * The type of the account to which the leaked AccessKey pair belongs. Valid values:
   * 
   * *   **master**: Alibaba Cloud account
   * *   **ram**: RAM user
   * 
   * @example
   * master
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      accesskeyId: 'AccesskeyId',
      aliUserName: 'AliUserName',
      asset: 'Asset',
      dealTime: 'DealTime',
      dealType: 'DealType',
      gmtModified: 'GmtModified',
      id: 'Id',
      status: 'Status',
      type: 'Type',
      url: 'Url',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesskeyId: 'string',
      aliUserName: 'string',
      asset: 'string',
      dealTime: 'string',
      dealType: 'string',
      gmtModified: 'number',
      id: 'number',
      status: 'string',
      type: 'string',
      url: 'string',
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

export class DescribeAccesskeyLeakListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details about AccessKey pair leaks.
   */
  accessKeyLeakList?: DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList[];
  /**
   * @remarks
   * The number of AccessKey pair leaks that are unhandled.
   * 
   * @example
   * 1
   */
  akLeakCount?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1612357897000
   */
  gmtLast?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B37C9052-A73E-4707-A024-9247702852BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of AccessKey pair leaks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyLeakList: 'AccessKeyLeakList',
      akLeakCount: 'AkLeakCount',
      currentPage: 'CurrentPage',
      gmtLast: 'GmtLast',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyLeakList: { 'type': 'array', 'itemType': DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList },
      akLeakCount: 'number',
      currentPage: 'number',
      gmtLast: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessKeyLeakList)) {
      $dara.Model.validateArray(this.accessKeyLeakList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

