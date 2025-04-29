// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSharePermissionResponseBodyAccounts } from "./DescribeImageSharePermissionResponseBodyAccounts";
import { DescribeImageSharePermissionResponseBodyShareGroups } from "./DescribeImageSharePermissionResponseBodyShareGroups";


export class DescribeImageSharePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud accounts.
   */
  accounts?: DescribeImageSharePermissionResponseBodyAccounts;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-bp1caf3yicx5jlfl****
   */
  imageId?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the custom image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The shared groups.
   */
  shareGroups?: DescribeImageSharePermissionResponseBodyShareGroups;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      shareGroups: 'ShareGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeImageSharePermissionResponseBodyAccounts,
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      shareGroups: DescribeImageSharePermissionResponseBodyShareGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accounts && typeof (this.accounts as any).validate === 'function') {
      (this.accounts as any).validate();
    }
    if(this.shareGroups && typeof (this.shareGroups as any).validate === 'function') {
      (this.shareGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

