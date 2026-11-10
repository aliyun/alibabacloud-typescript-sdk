// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveAndRouteServiceInCenRequest extends $dara.Model {
  /**
   * @remarks
   * The list of region IDs from which the cloud service is accessed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionIds?: string[];
  /**
   * @remarks
   * The instance ID of the CEN.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-ckwa2hhmuislse****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the cloud service.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * descname
   */
  description?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the cloud service.
   * 
   * > Typically, a cloud service uses multiple IP addresses or CIDR blocks. Call this operation multiple times to add all IP addresses or CIDR blocks of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The ID of the region where the cloud service is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance associated with the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-o6woh5s494zueq40v****
   */
  hostVpcId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionIds: 'AccessRegionIds',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      description: 'Description',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionIds: { 'type': 'array', 'itemType': 'string' },
      cenId: 'string',
      clientToken: 'string',
      description: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessRegionIds)) {
      $dara.Model.validateArray(this.accessRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

