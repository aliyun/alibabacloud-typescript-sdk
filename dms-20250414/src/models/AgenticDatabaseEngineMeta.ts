// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticDatabaseEngineMeta extends $dara.Model {
  catalogName?: string;
  encoding?: string;
  schemaName?: string;
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

