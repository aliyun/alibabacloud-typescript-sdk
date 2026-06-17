// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateRegionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The link type of the cluster. The backend randomly selects a default value. Valid values:
   * 
   * - **lvs**: Linux Virtual Server.
   * 
   * - **proxy**: proxy server.
   * 
   * - **dns**: Domain Name System.
   * 
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see the following documents:
   * 
   * - PolarDB for MySQL: [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * 
   * - PolarDB for PostgreSQL (Oracle Compatible): [Compute node specifications](https://help.aliyun.com/document_detail/207921.html).
   * 
   * - PolarDB for PostgreSQL: [Compute node specifications](https://help.aliyun.com/document_detail/209380.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * - Valid values for MySQL:
   * 
   *   - **5.6**
   * 
   *   - **5.7**
   * 
   *   - **8.0**
   * 
   * - Valid values for PostgreSQL:
   * 
   *   - **11**
   * 
   *   - **14**
   * 
   * - Valid values for Oracle:
   * 
   *   - **11**
   * 
   *   - **14**
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether to return the list of zones that support single-zone deployment. Valid values:
   * 
   * - **0** (default): The list is not returned.
   * 
   * - **1**: The list is returned.
   * 
   * @example
   * 1
   */
  dispenseMode?: string;
  /**
   * @remarks
   * Specifies whether to create a MaxScale cluster. Valid values:
   * 
   * - **true** (default): A MaxScale cluster is created.
   * 
   * - **false**: A MaxScale cluster is not created.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needMaxScaleLink?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subdomain. A subdomain is a level below a top-level domain. For example, if the parent domain is \\`cn-beijing\\`, a valid subdomain is \\`cn-beijing-i-aliyun\\`.
   * 
   * @example
   * cn-beijing-i-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available zones.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceConnType: 'DBInstanceConnType',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      dispenseMode: 'DispenseMode',
      needMaxScaleLink: 'NeedMaxScaleLink',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subDomain: 'SubDomain',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceConnType: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      dispenseMode: 'string',
      needMaxScaleLink: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subDomain: 'string',
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

