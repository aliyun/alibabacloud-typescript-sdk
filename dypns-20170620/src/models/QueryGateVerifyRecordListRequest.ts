// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyRecordListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authenticationType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  phoneNum?: string;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queryDate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      osType: 'OsType',
      ownerId: 'OwnerId',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      osType: 'string',
      ownerId: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      queryDate: 'string',
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

