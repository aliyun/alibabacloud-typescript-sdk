// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagHaRequest extends $dara.Model {
  /**
   * @remarks
   * The HA mode. Valid values:
   * 
   * *   **NONE**: disables HA.
   * *   **STATIC**: enables static HA.
   * *   **DYNAMIC**: enables dynamic HA.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port name.
   * 
   * >  If Mode is set to STATIC, you must specify a port name.
   * 
   * @example
   * 5
   */
  portName?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
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
   * The SAG instance ID.
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
  /**
   * @remarks
   * The virtual IP address.
   * 
   * >  If Mode is set to STATIC, you must specify a virtual IP address.
   * 
   * @example
   * 192.XX.XX.5
   */
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      virtualIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

