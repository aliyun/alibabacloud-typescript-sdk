// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The public IP address for the forward entry.
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port for the forward entry.
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the forward entry that you want to modify.
   * 
   * This parameter is required.
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The ID of the forward table.
   * 
   * This parameter is required.
   */
  forwardTableId?: string;
  /**
   * @remarks
   * The internal IP address for the forward entry.
   */
  internalIp?: string;
  /**
   * @remarks
   * The internal port for the forward entry.
   */
  internalPort?: string;
  /**
   * @remarks
   * The IP protocol. Valid values are tcp, udp, and any.
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the forward table is located.
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
      forwardEntryId: 'ForwardEntryId',
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
      forwardEntryId: 'string',
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

