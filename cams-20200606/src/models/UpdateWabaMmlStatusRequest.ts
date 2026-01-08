// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWabaMmlStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * waba Id。
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

