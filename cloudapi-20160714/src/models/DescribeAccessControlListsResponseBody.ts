// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListsResponseBodyAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * acl-3nsohdozz0ru8fi5onwz1
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * testAcl
   */
  aclName?: string;
  /**
   * @remarks
   * 访问控制策略组的IP版本。
   * - **IPv4**。
   * - **IPv6**。
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
    };
  }

  validate() {
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
   * The ACLs.
   */
  acls?: DescribeAccessControlListsResponseBodyAcls;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeAccessControlListsResponseBodyAcls,
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

