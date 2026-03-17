// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClientUserDNSRequest extends $dara.Model {
  /**
   * @example
   * 100.XX.XX.100
   */
  appDNS?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 100.XX.XX.110
   */
  recoveredDNS?: string[];
  /**
   * @remarks
   * The ID of the region where the SAG app instance is deployed.
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
   * The ID of the SAG app instance.
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

