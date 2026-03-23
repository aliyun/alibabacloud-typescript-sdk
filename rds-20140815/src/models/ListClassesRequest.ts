// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  DBInstanceId?: string;
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityCode: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      orderType: 'string',
      ownerId: 'number',
      regionId: 'string',
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

