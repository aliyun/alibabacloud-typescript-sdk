// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLPartition extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The time when the partition was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1735109884
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The time when the table was last accessed.
   * 
   * @example
   * 1608707407
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The key-value pair of the partition.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The description of the data storage.
   */
  sd?: DLStorageDescriptor;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The values in a partition key column.
   */
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

