// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticDatabaseEngineMeta extends $dara.Model {
  /**
   * @remarks
   * The catalog name in the database engine.
   * 
   * @example
   * def
   */
  catalogName?: string;
  /**
   * @remarks
   * The character set encoding of the database.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * public
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage capacity of the database, in MB.
   * 
   * @example
   * 1024
   */
  storageCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      encoding: 'Encoding',
      schemaName: 'SchemaName',
      storageCapacity: 'StorageCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      encoding: 'string',
      schemaName: 'string',
      storageCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

