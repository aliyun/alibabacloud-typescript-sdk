// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAclResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * An IP address entry (192.168.XX.XX) or a CIDR block entry (10.0.XX.XX/24).
   * 
   * @example
   * 10.0.XX.XX/24
   */
  entry?: string;
  /**
   * @remarks
   * The description of the ACL entry.
   * 
   * @example
   * test-entry
   */
  entryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      entryDescription: 'EntryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
      entryDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBodyRelatedListeners extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **white**: Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists are suitable for scenarios in which you want to allow access from specific IP addresses to an application. If a whitelist is improperly configured, risks may arise. After a whitelist is configured for a listener, only requests from the IP addresses that are added to the whitelist are distributed by the listener. If a whitelist is enabled but no IP address is added to the whitelist, the listener forwards all requests.
   * *   **black**: All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses to an application. If a blacklist is enabled but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * @example
   * White
   */
  aclType?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      aclType: 'AclType',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      aclType: 'string',
      listenerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is add to the ACL.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is add to the ACL.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The entries of the ACL.
   */
  aclEntries?: GetAclResponseBodyAclEntries[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * test-acl
   */
  aclName?: string;
  /**
   * @remarks
   * The IP version of the network ACL. Valid values:
   * 
   * *   **IPv4**
   * *   **IPv6**
   * 
   * @example
   * active
   */
  aclStatus?: string;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * IPv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The listeners that are associated with the ACL.
   */
  relatedListeners?: GetAclResponseBodyRelatedListeners[];
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * rg-acfmx7itmygzsza
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag of the ACL.
   */
  tags?: GetAclResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': GetAclResponseBodyAclEntries },
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      relatedListeners: { 'type': 'array', 'itemType': GetAclResponseBodyRelatedListeners },
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetAclResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    if(Array.isArray(this.relatedListeners)) {
      $dara.Model.validateArray(this.relatedListeners);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

