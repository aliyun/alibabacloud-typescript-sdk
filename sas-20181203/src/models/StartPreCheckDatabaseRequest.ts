// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPreCheckDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MYSQL**
   * *   **MSSQL**
   * *   **Oracle**
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The UUID of the agent that is used to back up the data of the database.
   * 
   * > You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ec1c0ba21d2911ed800000163e0e****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The region ID of the server that hosts the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      instanceUuid: 'InstanceUuid',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      instanceUuid: 'string',
      uniRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

