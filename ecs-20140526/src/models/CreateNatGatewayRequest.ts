// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestBandwidthPackage extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth for the EIPs in the bandwidth package. Unit: Mbit/s.
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of EIPs to create in the bandwidth package. Valid values: 1 to 10.
   */
  ipCount?: number;
  /**
   * @remarks
   * The ID of the zone in which to create the EIPs. If you do not specify a zone, the system randomly selects one.
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      ipCount: 'IpCount',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ipCount: 'number',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Configurations for the bandwidth packages to create and associate with the nat gateway.
   * 
   * This parameter is required.
   */
  bandwidthPackage?: CreateNatGatewayRequestBandwidthPackage[];
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * This token is client-generated and must be unique for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * A description of the nat gateway.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character but cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * A name for the nat gateway.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character but cannot start with `http://` or `https://`.
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which to create the nat gateway.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC in which to create the nat gateway.
   * 
   * This parameter is required.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: { 'type': 'array', 'itemType': CreateNatGatewayRequestBandwidthPackage },
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackage)) {
      $dara.Model.validateArray(this.bandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

