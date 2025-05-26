// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * IP protection switch, On: 1 Off: 0
   * 
   * @example
   * 0
   */
  ipProtection?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ipProtection: 'IpProtection',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtection: 'string',
      ownerId: 'number',
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

