// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
   * >This parameter is required when you query the instance type list for read-only instances, which means you set the **CommodityCode** parameter to a commodity code for read-only instances.
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
   * The type of order to query. Valid values:
   * * **BUY**: New purchase.
   * * **UPGRADE**: Configuration change.
   * * **RENEW**: Renewal.
   * * **CONVERT**: Billing method change.
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
   * The region ID. You can call DescribeRegions to obtain the region ID.
   * >This parameter is required if you use an Alibaba Cloud International Website account.
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

