// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The public IP address for the DNAT entry. This must be a public IP address of the NAT gateway associated with the DNAT table.
   * 
   * This parameter is required.
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port used for DNAT. Valid values: 1 to 65535.
   * 
   * This parameter is required.
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT table.
   * 
   * This parameter is required.
   */
  forwardTableId?: string;
  /**
   * @remarks
   * The private IP address to which traffic is forwarded.
   * 
   * This parameter is required.
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port to which traffic is forwarded. Valid values: 1 to 65535.
   * 
   * This parameter is required.
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol. Valid values: TCP, UDP, and Any. If you set this parameter to Any, the DNAT entry applies to all protocols.
   * 
   * This parameter is required.
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the DNAT table is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to retrieve a list of available regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

