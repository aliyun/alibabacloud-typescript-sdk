// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  externalIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  externalPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  forwardTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  internalIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  internalPort?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
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

