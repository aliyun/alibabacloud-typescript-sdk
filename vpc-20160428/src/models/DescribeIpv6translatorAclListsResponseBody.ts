// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * ipv6transacl-bp1de2****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * acl1
   */
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls extends $dara.Model {
  IPv6TranslatorAcl?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl[];
  static names(): { [key: string]: string } {
    return {
      IPv6TranslatorAcl: 'IPv6TranslatorAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv6TranslatorAcl: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl },
    };
  }

  validate() {
    if(Array.isArray(this.IPv6TranslatorAcl)) {
      $dara.Model.validateArray(this.IPv6TranslatorAcl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network ACLs.
   */
  ipv6TranslatorAcls?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls;
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
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorAcls: 'Ipv6TranslatorAcls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorAcls: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6TranslatorAcls && typeof (this.ipv6TranslatorAcls as any).validate === 'function') {
      (this.ipv6TranslatorAcls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

