// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhatsappConversionApiRequest extends $dara.Model {
  /**
   * @remarks
   * The embedded code.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 131
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of embedded permissions.
   */
  permissions?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      ownerId: 'number',
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

