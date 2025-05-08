// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSharePermissionResponseBodyAccounts } from "./DescribeImageSharePermissionResponseBodyAccounts";


export class DescribeImageSharePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account information.
   */
  accounts?: DescribeImageSharePermissionResponseBodyAccounts;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-5qkf6jv9a0tzd5ipwx5fi****
   */
  imageId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A44EE357-6174-5E37-A801-48F5790F9ACE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Alibaba Cloud accounts with which you share the image.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeImageSharePermissionResponseBodyAccounts,
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

