// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListsResponseBodyAclsAclTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAclsAclTags extends $dara.Model {
  tag?: DescribeAccessControlListsResponseBodyAclsAclTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAclTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-bp1l0kk4gxce43k*****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * rule1
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version that is used by the CLB instance associated with the ACL.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-jfenfbp1lhl0****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags added to the network ACL. The value of this parameter must be a STRING list in the JSON format.
   */
  tags?: DescribeAccessControlListsResponseBodyAclsAclTags;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      createTime: 'string',
      resourceGroupId: 'string',
      tags: DescribeAccessControlListsResponseBodyAclsAclTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBodyAcls extends $dara.Model {
  acl?: DescribeAccessControlListsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAcl },
    };
  }

  validate() {
    if(Array.isArray(this.acl)) {
      $dara.Model.validateArray(this.acl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of ACLs.
   */
  acls?: DescribeAccessControlListsResponseBodyAcls;
  /**
   * @remarks
   * The number of ACLs on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The number of the returned page. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: **50**. Default value: **10**.
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
   * 3CB646EF-6147-4566-A9D9-CE8FBE86F971
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of ACLs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.acls && typeof (this.acls as any).validate === 'function') {
      (this.acls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

