// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAclsWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ACLs. You can specify up to three IDs in each call.
   * 
   * This parameter is required.
   */
  aclIds?: string[];
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **White**: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. The whitelist applies to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. If a whitelist is configured for a listener, only requests from IP addresses that are added to the whitelist are forwarded by the listener. If you enable a whitelist but do not add an IP address to the whitelist, the listener forwards all requests.
   * *   **Black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are blocked. The blacklist applies to scenarios in which you want to block access from specific IP addresses to an application. If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * This parameter is required.
   * 
   * @example
   * White
   */
  aclType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclType: 'AclType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclIds)) {
      $dara.Model.validateArray(this.aclIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

