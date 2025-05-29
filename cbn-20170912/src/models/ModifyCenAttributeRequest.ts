// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The description of the CEN instance.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * cen
   */
  description?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The level of CIDR block overlapping.
   * 
   * Set the value to **REDUCED** (default). This value specifies that CIDR blocks can overlap but cannot be the same.
   * 
   * @example
   * REDUCED
   */
  protectionLevel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protectionLevel: 'ProtectionLevel',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protectionLevel: 'string',
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

