// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyAclConfigAclRelations } from "./GetListenerAttributeResponseBodyAclConfigAclRelations";


export class GetListenerAttributeResponseBodyAclConfig extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ACLs that are associated with the listener.
   */
  aclRelations?: GetListenerAttributeResponseBodyAclConfigAclRelations[];
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **White**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists are applicable to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured for a listener, only requests from IP addresses that are on the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the whitelist, the listener forwards all requests.
   * 
   * *   **Black**: a blacklist. Requests from the IP addresses or CIDR blocks in the network ACL are denied. Blacklists are suitable for scenarios in which you want to deny access from specific IP addresses or CIDR blocks to an application.
   * 
   *     If a blacklist is configured for a listener but no IP addresses are added to the blacklist, the listener forwards all requests.
   * 
   * @example
   * White
   */
  aclType?: string;
  static names(): { [key: string]: string } {
    return {
      aclRelations: 'AclRelations',
      aclType: 'AclType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRelations: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyAclConfigAclRelations },
      aclType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclRelations)) {
      $dara.Model.validateArray(this.aclRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

