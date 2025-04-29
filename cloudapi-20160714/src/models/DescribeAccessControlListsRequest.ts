// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListsRequest extends $dara.Model {
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
   * IP版本，可以设置为**ipv4**或者**ipv6**。
   * 
   * @example
   * ipv6
   */
  addressIPVersion?: string;
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
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

