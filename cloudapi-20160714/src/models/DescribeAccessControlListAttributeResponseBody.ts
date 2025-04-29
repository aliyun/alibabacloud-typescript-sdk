// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessControlListAttributeResponseBodyAclEntrys } from "./DescribeAccessControlListAttributeResponseBodyAclEntrys";


export class DescribeAccessControlListAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policy.
   */
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * acl-uf6fpfdg3b5muska7uqem
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
   * The IP protocol version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.aclEntrys && typeof (this.aclEntrys as any).validate === 'function') {
      (this.aclEntrys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

