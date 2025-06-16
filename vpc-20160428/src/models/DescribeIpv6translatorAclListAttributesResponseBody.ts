// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries } from "./DescribeIpv6translatorAclListAttributesResponseBodyAclEntries";


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

