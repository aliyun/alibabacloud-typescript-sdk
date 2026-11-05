// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagHaRequest extends $dara.Model {
  /**
   * @remarks
   * The HA pattern. Valid values:
   * 
   * - **NONE**: The HA feature is disabled.
   * - **STATIC**: static pattern
   * - **DYNAMIC**: dynamic schema
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
   * > If the HA mode is set to STATIC, you must specify a port name.
   * 
   * @example
   * 5
   */
  portName?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The instance ID of the Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the associated Smart Access Gateway device.
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
   * > If the HA mode is set to STATIC, you must specify a virtual IP address.
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

