// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateIpamResourceDiscoveryRequestTag } from "./CreateIpamResourceDiscoveryRequestTag";


export class CreateIpamResourceDiscoveryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid value:
   * 
   * *   **true**: Performs the dry run without creating a custom resource discovery instance. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): Performs a dry run and the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and a custom resource discovery instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of resource discovery.
   * 
   * @example
   * description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * @example
   * name
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * The list of effective regions.
   * 
   * This parameter is required.
   */
  operatingRegionList?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request region.
   * 
   * >  The request region is the managed region of the resource discovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   */
  tag?: CreateIpamResourceDiscoveryRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      operatingRegionList: 'OperatingRegionList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryName: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateIpamResourceDiscoveryRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

