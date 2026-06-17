// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAvailableResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node. For more information, see [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html).
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * Valid values for MySQL:
   * 
   * - **5.6**
   * 
   * - **5.7**
   * 
   * - **8.0**
   * 
   * Valid values for PostgreSQL:
   * 
   * - **11**
   * 
   * - **14**
   * 
   * Valid values for Oracle:
   * 
   * - **11**
   * 
   * - **14**
   * 
   * > This parameter is required when the **DBType** parameter is specified.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go (also known as postpaid or hourly billing).
   * 
   * - **Prepaid**: subscription (also known as prepaid).
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. The default value is **cn-hangzhou**.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available zones.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

