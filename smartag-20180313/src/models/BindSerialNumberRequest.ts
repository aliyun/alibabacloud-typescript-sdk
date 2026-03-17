// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSerialNumberRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SAG instance.
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
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sage62x021922****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The SAG instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-r79m060r6oy55******
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

