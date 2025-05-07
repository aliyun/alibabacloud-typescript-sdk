// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The commodity code of the instances.
   * 
   * *   **bards_intl**: The instances are pay-as-you-go primary instances.
   * *   **rds_intl**: The instances are subscription primary instances.
   * *   **rords_intl**: The instances are pay-as-you-go read-only instances.
   * *   **rds_rordspre_public_intl**: The instances are subscription read-only instances.
   * 
   * This parameter is required.
   * 
   * @example
   * bards_intl
   */
  commodityCode?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * >  If you set the **CommodityCode** parameter to the commodity code of read-only instances, you must specify this parameter.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **MariaDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The type of order that you want to query. Valid values:
   * 
   * *   **BUY**: specifies the query orders that are used to purchase instances.
   * *   **UPGRADE**: specifies the query orders that are used to change the specifications of instances.
   * *   **RENEW**: specifies the query orders that are used to renew instances.
   * *   **CONVERT**: specifies the query orders that are used to change the billing methods of instances.
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
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * >  If you are using an Alibaba Cloud account on the International site (alibabacloud.com), you must specify this parameter.
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

