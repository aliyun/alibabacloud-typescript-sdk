// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateRegionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster link type. The backend randomly selects a default value. Valid values:
   * * **lvs**: Linux virtual server.
   * * **proxy**: proxy server.
   * * **dns**: Domain Name System.
   * 
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @remarks
   * The node specification. For more information, see the following topics:
   * 
   * - PolarDB for MySQL: [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * - PolarDB for PostgreSQL (Compatible with Oracle): [Compute node specifications](https://help.aliyun.com/document_detail/207921.html).
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
   * The type of the database engine. Valid values:
   * - **MySQL**
   * - **PostgreSQL**
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
   * The database DPI engine version number.
   * * Valid version numbers for MySQL: 
   *     * **5.6**
   *     * **5.7**
   *     * **8.0**
   * * Valid version numbers for PostgreSQL:
   *     * **11**
   *     * **14**
   * * Valid version numbers for Oracle:
   *     * **11**
   *     * **14**
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
   * * **0** (default): does not return the list.
   * * **1**: returns the list.
   * 
   * @example
   * 1
   */
  dispenseMode?: string;
  /**
   * @remarks
   * Specifies whether to create MaxScale. Valid values:
   * * **true** (default): creates MaxScale.
   * * **false**: does not create MaxScale.
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
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subdomain. The subdomain is the next level under the top-level domain (first-level domain or parent domain). For example, if the parent domain is cn-beijing, the subdomain can be cn-beijing-i-aliyun.
   * 
   * @example
   * cn-beijing-i-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The zone ID.
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

