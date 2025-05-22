// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureMigrationJobRequestMigrationMode extends $dara.Model {
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * >  The permissions that are required for database accounts vary with the migration scenario. For more information, see [Overview of data migration scenarios](https://help.aliyun.com/document_detail/26618.html).
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataIntialization?: boolean;
  /**
   * @remarks
   * The password of the destination database account.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * The name of the destination database or the authentication database.
   * 
   * > 
   * *   You must specify the database name only if the **DestinationEndpoint.EngineName** parameter is set to **PostgreSQL**, **DRDS**, or **MongoDB**.
   * *   If the **DestinationEndpoint.EngineName** parameter is set to **PostgreSQL** or **DRDS**, specify the name of the destination database. If the DestinationEndpoint.EngineName parameter is set to **MongoDB**, specify the name of the authentication database.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  structureIntialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataIntialization: 'DataIntialization',
      dataSynchronization: 'DataSynchronization',
      structureIntialization: 'StructureIntialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIntialization: 'boolean',
      dataSynchronization: 'boolean',
      structureIntialization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

