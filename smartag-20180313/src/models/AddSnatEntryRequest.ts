// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-jf5w9a8k5mhi5h****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 11.0.XX.XX
   */
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      snatIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

