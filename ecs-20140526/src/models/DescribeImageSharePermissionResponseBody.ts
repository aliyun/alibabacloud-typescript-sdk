// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSharePermissionResponseBodyAccountsAccount extends $dara.Model {
  aliyunId?: string;
  sharedTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      sharedTime: 'SharedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      sharedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBodyAccounts extends $dara.Model {
  account?: DescribeImageSharePermissionResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseBodyAccountsAccount },
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBodyShareGroupsShareGroup extends $dara.Model {
  group?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBodyShareGroups extends $dara.Model {
  shareGroup?: DescribeImageSharePermissionResponseBodyShareGroupsShareGroup[];
  static names(): { [key: string]: string } {
    return {
      shareGroup: 'ShareGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareGroup: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseBodyShareGroupsShareGroup },
    };
  }

  validate() {
    if(Array.isArray(this.shareGroup)) {
      $dara.Model.validateArray(this.shareGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageSharePermissionResponseBody extends $dara.Model {
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

