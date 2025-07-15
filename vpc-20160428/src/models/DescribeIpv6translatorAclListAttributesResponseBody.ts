// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * @example
   * client IP
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ID of the ACL entry.
   * 
   * @example
   * ipv6transaclentry-bp105jrs****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The IP address specified in the ACL entry.
   * 
   * @example
   * 12ab:0:0:XXXX::0102/128
   */
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryId: 'AclEntryId',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryId: 'string',
      aclEntryIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries extends $dara.Model {
  aclEntry?: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntry)) {
      $dara.Model.validateArray(this.aclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACLs.
   */
  aclEntries?: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries;
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
   * The name of the ACL.
   * 
   * @example
   * acl1
   */
  aclName?: string;
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
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      aclName: 'AclName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries,
      aclId: 'string',
      aclName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.aclEntries && typeof (this.aclEntries as any).validate === 'function') {
      (this.aclEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

