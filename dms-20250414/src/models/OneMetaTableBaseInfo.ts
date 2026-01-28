// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaTableEngineMeta } from "./OneMetaTableEngineMeta";


export class OneMetaTableBaseInfo extends $dara.Model {
  catalogType?: string;
  databaseUuid?: string;
  description?: string;
  engineMeta?: OneMetaTableEngineMeta;
  name?: string;
  qualifiedName?: string;
  tableType?: string;
  tableUuid?: string;
  static names(): { [key: string]: string } {
    return {
      catalogType: 'CatalogType',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      engineMeta: 'EngineMeta',
      name: 'Name',
      qualifiedName: 'QualifiedName',
      tableType: 'TableType',
      tableUuid: 'TableUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogType: 'string',
      databaseUuid: 'string',
      description: 'string',
      engineMeta: OneMetaTableEngineMeta,
      name: 'string',
      qualifiedName: 'string',
      tableType: 'string',
      tableUuid: 'string',
    };
  }

  validate() {
    if(this.engineMeta && typeof (this.engineMeta as any).validate === 'function') {
      (this.engineMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

