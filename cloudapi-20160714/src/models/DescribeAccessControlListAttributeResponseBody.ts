// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $dara.Model {
  /**
   * @remarks
   * The entry description.
   * 
   * @example
   * default
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ACL entry.
   * 
   * @example
   * 192.168.1.0/24
   */
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
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

export class DescribeAccessControlListAttributeResponseBodyAclEntrys extends $dara.Model {
  aclEntry?: DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry },
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

