// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDailyBillInfoLeafNewRequest extends $dara.Model {
  billCycle?: string;
  itemId?: string;
  itemName?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subjectItemId?: string;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      itemId: 'ItemId',
      itemName: 'ItemName',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subjectItemId: 'SubjectItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      itemId: 'string',
      itemName: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subjectItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

