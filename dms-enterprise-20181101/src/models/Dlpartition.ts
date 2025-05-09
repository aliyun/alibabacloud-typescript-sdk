// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLPartition extends $dara.Model {
  catalogName?: string;
  createTime?: number;
  dbName?: string;
  lastAccessTime?: number;
  parameters?: { [key: string]: string };
  sd?: DLStorageDescriptor;
  tableName?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      createTime: 'CreateTime',
      dbName: 'DbName',
      lastAccessTime: 'LastAccessTime',
      parameters: 'Parameters',
      sd: 'Sd',
      tableName: 'TableName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      createTime: 'number',
      dbName: 'string',
      lastAccessTime: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sd: DLStorageDescriptor,
      tableName: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.sd && typeof (this.sd as any).validate === 'function') {
      (this.sd as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

