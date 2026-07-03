// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientUserDNSRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of the primary and secondary DNS servers that the client uses when it connects to a private network.
   * 
   * > - If the client uses PrivateZone to access Alibaba Cloud, the DNS server IP addresses are 100.100.2.136 and 100.100.2.138.
   * 
   * - DNS configuration is supported only on Android and macOS clients, version 2.1.1 or later.
   * - This parameter is optional. If you do not specify this parameter, the system deletes the existing DNS configuration.
   * 
   * @example
   * 100.XX.XX.100
   */
  appDNS?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP addresses of the primary and secondary DNS servers to use after the client disconnects from the private network.
   * 
   * > This feature is not yet available.
   * 
   * @example
   * 100.XX.XX.110
   */
  recoveredDNS?: string[];
  /**
   * @remarks
   * The region ID of the Smart Access Gateway app instance.
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
   * The ID of the Smart Access Gateway app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-9uyg53s6juhpxv****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      appDNS: 'AppDNS',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recoveredDNS: 'RecoveredDNS',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDNS: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appDNS)) {
      $dara.Model.validateArray(this.appDNS);
    }
    if(Array.isArray(this.recoveredDNS)) {
      $dara.Model.validateArray(this.recoveredDNS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

