// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attrKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      attrKey: 'AttrKey',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrKey: 'string',
      bizType: 'number',
      ownerId: 'number',
      prodCode: 'string',
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

