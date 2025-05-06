// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateRegionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster link type. The backend randomly selects the default value. Valid values:
   * 
   * *   **lvs**: Linux virtual server.
   * *   **proxy**: proxy server.
   * *   **dns**: domain name system.
   * 
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @remarks
   * The specifications of the node. For information about node specifications, see the following topics:
   * 
   * *   PolarDB for MySQL: [Specifications of compute nodes](https://help.aliyun.com/document_detail/102542.html)
   * *   PolarDB for Oracle: [Specifications of compute nodes](https://help.aliyun.com/document_detail/207921.html)
   * *   PolarDB for PostgreSQL: [Specifications of compute nodes](https://help.aliyun.com/document_detail/209380.html)
   * 
   * This parameter is required.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine
   * 
   * *   Valid values for the MySQL database engine:
   * 
   *     *   **5.6**
   *     *   **5.7**
   *     *   **8.0**
   * 
   * *   Valid values for the PostgreSQL database engine:
   * 
   *     *   **11**
   *     *   **14**
   * 
   * *   Valid value for the Oracle database engine: **11**
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether to return the zones in which the single-zone deployment method is supported. Default value: 0. Valid values:
   * 
   * *   **0**: no value returned
   * *   **1**: returns the zones.
   * 
   * @example
   * 1
   */
  dispenseMode?: string;
  /**
   * @remarks
   * Specifies whether to create Maxscale. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
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
   * The subdomain. It is the child domain of the top-level domain name or parent domain. For example, if the parent domain name is cn-beijing, its child domain can be cn-beijing-i-aliyun.
   * 
   * @example
   * cn-beijing-i-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available zones.
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

