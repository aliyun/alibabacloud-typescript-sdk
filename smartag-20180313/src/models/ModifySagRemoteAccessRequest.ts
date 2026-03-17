// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagRemoteAccessRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The remote access IP address of the SAG device.
   * 
   * @example
   * 10.10.10.2
   */
  remoteAccessIp?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number (SN) of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-100-v1p7-9
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the corresponding SAG instance.
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
      remoteAccessIp: 'RemoteAccessIp',
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
      remoteAccessIp: 'string',
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

