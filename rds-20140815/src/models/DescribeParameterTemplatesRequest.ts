// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * Basic
   */
  category?: string;
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
   * The instance ID.
   * 
   * @example
   * rm-bp1imnm**********
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **mysql**: MySQL
   * *   **mssql**: SQL Server
   * *   **PostgreSQL**: PostgreSQL
   * *   **MariaDB**: MariaDB
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * *   Valid values when you set the Engine parameter to mysql: **5.5, 5.6, 5.7, and 8.0**.
   * *   Valid values when you set the Engine parameter to mssql: **2008r2**.
   * *   Valid values when you set the Engine parameter to PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**.
   * *   Valid values when you set the Engine parameter to MariaDB: **10.3**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
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

