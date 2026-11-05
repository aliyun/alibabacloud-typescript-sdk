// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagUserDnsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the primary DNS server.
   * 
   * > If you do not specify this parameter, the DNS configuration is cleared.
   * 
   * @example
   * 192.XX.XX.1
   */
  masterDns?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The IP address of the secondary DNS server.
   * 
   * > If you do not specify this parameter, the secondary DNS configuration is cleared.
   * 
   * @example
   * 192.XX.XX.2
   */
  slaveDns?: string;
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
   * The serial number of the bound Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slaveDns: 'SlaveDns',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slaveDns: 'string',
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

