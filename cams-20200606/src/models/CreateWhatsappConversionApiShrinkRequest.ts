// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhatsappConversionApiShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
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

