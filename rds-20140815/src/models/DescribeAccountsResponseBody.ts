// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccounts } from "./DescribeAccountsResponseBodyAccounts";


export class DescribeAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the account.
   */
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2E94301-D07F-4457-9B49-6AA2BB388C85
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The first time when the system admin account was enabled. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 2020-02-06T11:00:00Z
   */
  systemAdminAccountFirstActivationTime?: string;
  /**
   * @remarks
   * Indicates whether the system admin account was enabled. Valid values:
   * 
   * *   **true**: The system admin account was enabled.
   * *   **false**: The system admin account was disabled.
   * 
   * >  The [system admin account](https://help.aliyun.com/document_detail/170736.html) is supported only for the instances that run SQL Server. If the instance runs SQL Server, a value is returned for this parameter. If the instance runs a different database engine, no value is returned for this parameter.
   * 
   * @example
   * True
   */
  systemAdminAccountStatus?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      systemAdminAccountFirstActivationTime: 'SystemAdminAccountFirstActivationTime',
      systemAdminAccountStatus: 'SystemAdminAccountStatus',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      pageNumber: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      systemAdminAccountFirstActivationTime: 'string',
      systemAdminAccountStatus: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.accounts && typeof (this.accounts as any).validate === 'function') {
      (this.accounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

