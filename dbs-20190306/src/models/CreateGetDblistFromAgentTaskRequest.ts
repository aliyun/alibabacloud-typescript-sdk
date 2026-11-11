// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGetDBListFromAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the ID.
   * 
   * > This parameter is required.
   * 
   * @example
   * 160813
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The unique identifier of the backup gateway.
   * 
   * @example
   * 4DF900B7082BC3****489D765C8D2ABE
   */
  backupGatewayIdentifier?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MySQL**
   * - **MSSQL**
   * - **Oracle**
   * - **MariaDB**
   * - **PostgreSQL**
   * - **DRDS**
   * - **MongoDB**
   * - **Redis**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  ownerId?: string;
  /**
   * @remarks
   * The database connection address.
   * 
   * @example
   * 123.0.XX.XX
   */
  sourceEndpointIP?: string;
  /**
   * @remarks
   * The database connection port.
   * 
   * @example
   * 3306
   */
  sourceEndpointPort?: number;
  /**
   * @remarks
   * The region ID of the backup gateway.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupGatewayIdentifier: 'BackupGatewayIdentifier',
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
      backupGatewayIdentifier: 'string',
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

