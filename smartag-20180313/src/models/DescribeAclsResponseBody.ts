// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLsResponseBodyAclsAcl extends $dara.Model {
  aclId?: string;
  aclType?: string;
  name?: string;
  resourceGroupId?: string;
  sagCount?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      sagCount: 'SagCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      name: 'string',
      resourceGroupId: 'string',
      sagCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBodyAcls extends $dara.Model {
  acl?: DescribeACLsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeACLsResponseBodyAclsAcl },
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

export class DescribeACLsResponseBody extends $dara.Model {
  acls?: DescribeACLsResponseBodyAcls;
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
   * The number of entries returned per page.
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
   * 660F303F-C88E-4026-BC6A-FC24B78FD7EA
   */
  requestId?: string;
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
      acls: 'Acls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeACLsResponseBodyAcls,
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

