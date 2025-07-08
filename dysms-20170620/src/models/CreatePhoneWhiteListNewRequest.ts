// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneWhiteListNewRequest extends $dara.Model {
  ownerId?: number;
  phoneNumbers?: string;
  prodCode?: string;
  remarks?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
      prodCode: 'ProdCode',
      remarks: 'Remarks',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumbers: 'string',
      prodCode: 'string',
      remarks: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.remarks)) {
      $dara.Model.validateArray(this.remarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

