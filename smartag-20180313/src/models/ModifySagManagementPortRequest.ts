// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagManagementPortRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the management port gateway.
   * 
   * @example
   * 192.XX.XX.254
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the management port.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  IP?: string;
  /**
   * @remarks
   * The subnet mask for the IP address of the management port.
   * 
   * This parameter is required.
   * 
   * @example
   * 255.255.255.0
   */
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      IP: 'IP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      IP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

