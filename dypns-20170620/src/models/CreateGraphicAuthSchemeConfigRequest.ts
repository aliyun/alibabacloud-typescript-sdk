// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGraphicAuthSchemeConfigRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * Web
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

