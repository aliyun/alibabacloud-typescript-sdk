// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWabaBusinessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the WhatsApp Business Account (WABA).
   * 
   * This parameter is required.
   * 
   * @example
   * 293848822333
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

