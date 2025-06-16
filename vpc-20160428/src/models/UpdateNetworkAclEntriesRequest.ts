// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateNetworkAclEntriesRequestEgressAclEntries } from "./UpdateNetworkAclEntriesRequestEgressAclEntries";
import { UpdateNetworkAclEntriesRequestIngressAclEntries } from "./UpdateNetworkAclEntriesRequestIngressAclEntries";


export class UpdateNetworkAclEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the outbound rules.
   */
  egressAclEntries?: UpdateNetworkAclEntriesRequestEgressAclEntries[];
  /**
   * @remarks
   * The information about the inbound rule.
   */
  ingressAclEntries?: UpdateNetworkAclEntriesRequestIngressAclEntries[];
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-bp1lhl0taikrzxsc****
   */
  networkAclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to update outbound rules. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter cannot be used to add outbound rules to ACLs. If you want to add more outbound rules to ACLs, specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.
   * 
   * @example
   * false
   */
  updateEgressAclEntries?: boolean;
  /**
   * @remarks
   * Specifies whether to update inbound rules. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter cannot be used to add inbound rules to ACLs. If you want to add more inbound rules to ACLs, you must specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.
   * 
   * @example
   * false
   */
  updateIngressAclEntries?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      updateEgressAclEntries: 'UpdateEgressAclEntries',
      updateIngressAclEntries: 'UpdateIngressAclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestEgressAclEntries },
      ingressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestIngressAclEntries },
      networkAclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      updateEgressAclEntries: 'boolean',
      updateIngressAclEntries: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntries)) {
      $dara.Model.validateArray(this.egressAclEntries);
    }
    if(Array.isArray(this.ingressAclEntries)) {
      $dara.Model.validateArray(this.ingressAclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

