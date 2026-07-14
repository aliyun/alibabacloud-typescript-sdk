// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhatsappConversionApiShrinkRequest extends $dara.Model {
  /**
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * 131
   */
  instanceId?: string;
  ownerId?: number;
  permissionsShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      permissionsShrink: 'Permissions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      ownerId: 'number',
      permissionsShrink: 'string',
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

