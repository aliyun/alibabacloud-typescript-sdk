// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamResourceDiscoveryRequest extends $dara.Model {
  /**
   * @remarks
   * The list of effective regions to add.
   */
  addOperatingRegion?: string[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform the dry run. Valid values:
   * 
   * *   **true**: Performs a dry run without modifying the resource discovery instance. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): Performs a dry run and the actual request. If the request passes the check, an HTTP 2xx status code is returned and the resource discovery instance is modified.
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
   * test description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @remarks
   * The ID of resource discovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of effective regions to remove.
   */
  removeOperatingRegion?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addOperatingRegion: 'AddOperatingRegion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeOperatingRegion: 'RemoveOperatingRegion',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addOperatingRegion)) {
      $dara.Model.validateArray(this.addOperatingRegion);
    }
    if(Array.isArray(this.removeOperatingRegion)) {
      $dara.Model.validateArray(this.removeOperatingRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

