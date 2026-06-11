// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaDatabaseEngineMeta extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   */
  catalogName?: string;
  /**
   * @remarks
   * The character encoding for the database.
   */
  encoding?: string;
  /**
   * @remarks
   * The schema name.
   */
  schemaName?: string;
  /**
   * @remarks
   * The database storage capacity, in GB.
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

