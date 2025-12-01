// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGetDBListFromAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the ID.
   * 
   * >  This parameter is required.
   * 
   * @example
   * 160813
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MySQL**
   * *   **MSSQL**
   * *   **Oracle**
   * *   **MariaDB**
   * *   **PostgreSQL**
   * *   **DRDS**
   * *   **MongoDB**
   * *   **Redis**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  ownerId?: string;
  /**
   * @remarks
   * The URL that is used to access the database.
   * 
   * @example
   * 123.0.0.1
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region in which the backup gateway resides.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      clientToken: 'ClientToken',
      databaseType: 'DatabaseType',
      ownerId: 'OwnerId',
      sourceEndpointIP: 'SourceEndpointIP',
      sourceEndpointPort: 'SourceEndpointPort',
      sourceEndpointRegion: 'SourceEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      clientToken: 'string',
      databaseType: 'string',
      ownerId: 'string',
      sourceEndpointIP: 'string',
      sourceEndpointPort: 'number',
      sourceEndpointRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

