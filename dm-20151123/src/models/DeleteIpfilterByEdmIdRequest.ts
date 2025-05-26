// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpfilterByEdmIdRequest extends $dara.Model {
  /**
   * @remarks
   * Deprecated, kept for historical compatibility.
   * 
   * @example
   * 1
   */
  fromType?: number;
  /**
   * @remarks
   * Record ID
   * 
   * @example
   * 10120
   */
  id?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      id: 'string',
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

