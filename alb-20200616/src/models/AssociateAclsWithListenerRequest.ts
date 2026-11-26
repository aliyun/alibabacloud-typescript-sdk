// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAclsWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL instance IDs. You can specify up to three ACL instance IDs.
   * 
   * This parameter is required.
   */
  aclIds?: string[];
  /**
   * @remarks
   * The access control type. Valid values:
   * 
   * - **White**: specifies a whitelist. Only requests from the IP addresses or CIDR blocks in the Settings of the selected access control policy group are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Configuring a whitelist poses risks to your business. After a whitelist is configured, only the IP addresses in the whitelist can access the load balancing listener. If you enable a whitelist but do not add IP addresses to the access control policy group, the load balancing listener forwards all requests.
   * - **Black**: specifies a blacklist. Requests from the IP addresses or CIDR blocks in the Settings of the selected access control policy group are not forwarded. Blacklists apply to scenarios in which you want to block access from specific IP addresses. If you enable a blacklist but do not add IP addresses to the access control policy group, the load balancing listener forwards all requests.
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
   * You can use the client to generate the value, and you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not set this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run and does not associate the ACLs with the listener. The system checks whether the required parameters are set, and validates the request format and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener instance ID. Before you invoke this operation, confirm that the Application Load Balancer (ALB) instance to which the listener belongs is not associated with a security group. After an ALB instance is associated with a security group, you cannot attach an access control policy to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn9*******
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

