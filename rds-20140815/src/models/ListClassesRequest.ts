// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instance to query.
   * 
   * <props="china">
   * * **bards**: Pay-as-you-go primary instance.
   * * **rds**: Subscription primary instance.
   * * **rords**: Pay-as-you-go read-only instance.
   * * **rds_rordspre_public_cn**: Subscription read-only instance.
   * 
   * 
   * <props="intl">
   * * **bards_intl**: Pay-as-you-go primary instance.
   * * **rds_intl**: Subscription primary instance.
   * * **rords_intl**: Pay-as-you-go read-only instance.
   * * **rds_rordspre_public_intl**: Subscription read-only instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bards
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
   * > When you query the list of instance types for read-only instances, which means you specify the commodity code of a read-only instance for the **CommodityCode** parameter, this parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * * **MariaDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The order type to query. Valid values:
   * * **BUY**: Purchase.
   * * **UPGRADE**: Upgrade.
   * * **RENEW**: Renewal.
   * * **CONVERT**: Billing method conversion.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to obtain the region ID.
   * > If you use an Alibaba Cloud international site account, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

