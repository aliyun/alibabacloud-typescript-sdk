// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStandardProtocolListNewRequest extends $dara.Model {
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  protocolType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      protocolType: 'ProtocolType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      protocolType: 'number',
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

