// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveAndRouteServiceInCenRequest extends $dara.Model {
  /**
   * @remarks
   * The list of region IDs that access the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionIds?: string[];
  /**
   * @remarks
   * The CEN instance ID.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the cloud service.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * descname
   */
  description?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the cloud service.
   * 
   * > Cloud services typically use multiple IP addresses or CIDR blocks. Call this operation repeatedly to add all IP addresses or CIDR blocks of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The region ID of the cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID associated with the cloud service.
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

