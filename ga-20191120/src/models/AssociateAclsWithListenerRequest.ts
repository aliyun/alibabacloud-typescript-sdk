// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAclsWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy group. You can associate up to two access control policy groups.
   * 
   * This parameter is required.
   */
  aclIds?: string[];
  /**
   * @remarks
   * The type of access control. Valid values:
   * - **white**: Only requests from the IP addresses or CIDR blocks Settings in the specified access control policy group are forwarded. Whitelists are applicable to scenarios in which you want to allow only specific IP addresses to access your application. After you enable a whitelist, only the IP addresses in the whitelist can access the Global Accelerator listener. If you enable a whitelist but the access control policy group does not contain any IP addresses, the Global Accelerator listener forwards all requests.
   * - **black**: All requests from the IP addresses or CIDR blocks Settings in the specified access control policy group are blocked. Blacklists are applicable to scenarios in which you want to block specific IP addresses from accessing your application. If you enable a blacklist but the access control policy group does not contain any IP addresses, the Global Accelerator listener forwards all requests.
   * 
   * This parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without associating the resources. The system checks the required parameters, request syntax, and business limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * Only intelligent routing listeners support the access control feature.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclType: 'AclType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
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

