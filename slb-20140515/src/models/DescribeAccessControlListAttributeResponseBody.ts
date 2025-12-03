// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * @example
   * test
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The IP entry in the ACL.
   * 
   * @example
   * 192.168.0.1
   */
  aclEntryIP?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIP: 'AclEntryIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryIP: 'string',
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

export class DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener extends $dara.Model {
  /**
   * @remarks
   * The type of ACL. Valid values:
   * 
   * *   **black**
   * *   **white**
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The frontend port of the listener with which the ACL is associated.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * lb-bp1qpzldlm38bnexl****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The type of protocol that the associated listener uses.
   * 
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyRelatedListeners extends $dara.Model {
  relatedListener?: DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener[];
  static names(): { [key: string]: string } {
    return {
      relatedListener: 'RelatedListener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedListener: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyRelatedListenersRelatedListener },
    };
  }

  validate() {
    if(Array.isArray(this.relatedListener)) {
      $dara.Model.validateArray(this.relatedListener);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessControlListAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class DescribeAccessControlListAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeAccessControlListAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyTagsTag },
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

export class DescribeAccessControlListAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access control policy.
   */
  aclEntrys?: DescribeAccessControlListAttributeResponseBodyAclEntrys;
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-bp1ut10zzvh1y8dfs****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * doctest
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The time when the ACL was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The listeners with which the ACL is associated.
   */
  relatedListeners?: DescribeAccessControlListAttributeResponseBodyRelatedListeners;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C9906A1D-86F7-4C9C-A369-54DA42EF206A
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmz3jksig****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the ACL.
   */
  tags?: DescribeAccessControlListAttributeResponseBodyTags;
  /**
   * @remarks
   * The total number of ACL entries.
   * 
   * @example
   * 200
   */
  totalAclEntry?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      createTime: 'CreateTime',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      totalAclEntry: 'TotalAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: DescribeAccessControlListAttributeResponseBodyAclEntrys,
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      createTime: 'string',
      relatedListeners: DescribeAccessControlListAttributeResponseBodyRelatedListeners,
      requestId: 'string',
      resourceGroupId: 'string',
      tags: DescribeAccessControlListAttributeResponseBodyTags,
      totalAclEntry: 'number',
    };
  }

  validate() {
    if(this.aclEntrys && typeof (this.aclEntrys as any).validate === 'function') {
      (this.aclEntrys as any).validate();
    }
    if(this.relatedListeners && typeof (this.relatedListeners as any).validate === 'function') {
      (this.relatedListeners as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

