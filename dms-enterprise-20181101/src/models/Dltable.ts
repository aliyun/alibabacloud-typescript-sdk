// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLTable extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog to which the table belongs.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The time when the data table was created.
   * 
   * @example
   * 1731586286
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the table.
   * 
   * @example
   * 88653
   */
  creatorId?: number;
  /**
   * @remarks
   * The ID of the database in which the table is stored.
   * 
   * @example
   * 19
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database in which the table is stored.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The description of the application table.
   * 
   * @example
   * 1410769
   */
  description?: string;
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
   * The storage path of the table.
   * 
   * @example
   * oss://xxx
   */
  location?: string;
  /**
   * @remarks
   * The ID of the user who last modified the table.
   * 
   * @example
   * 1410769
   */
  modifierId?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * 100g_customer
   */
  name?: string;
  /**
   * @remarks
   * The name of the table owner.
   * 
   * @example
   * zhangsan
   */
  owner?: string;
  /**
   * @remarks
   * The type of the table owner. Valid values: USER, ROLE, and GROUP.
   * 
   * @example
   * USER
   */
  ownerType?: string;
  /**
   * @remarks
   * The key-value pair.
   * 
   * @example
   * {
   *       "EXTERNAL": "TRUE",
   *       "delta.minReaderVersion": "1"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The column attributes of the table.
   */
  partitionKeys?: DLColumn[];
  /**
   * @remarks
   * The retention period of the table.
   * 
   * @example
   * 300
   */
  retention?: number;
  /**
   * @remarks
   * The description of data storage, including the storage characteristics and format of the table.
   */
  storageDescriptor?: DLStorageDescriptor;
  /**
   * @remarks
   * The type of the table. Valid values: MANAGED_TABLE, EXTERNAL_TABLE, VIRTUAL_VIEW, INDEX_TABLE, and MATERIALIZED_VIEW.
   * 
   * @example
   * EXTERNAL_TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * The expanded text of the view if the table type is view.
   * 
   * @example
   * ""
   */
  viewExpandedText?: string;
  /**
   * @remarks
   * The original text of the view if the table type is view.
   * 
   * @example
   * ""
   */
  viewOriginalText?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      dbId: 'DbId',
      dbName: 'DbName',
      description: 'Description',
      lastAccessTime: 'LastAccessTime',
      location: 'Location',
      modifierId: 'ModifierId',
      name: 'Name',
      owner: 'Owner',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      partitionKeys: 'PartitionKeys',
      retention: 'Retention',
      storageDescriptor: 'StorageDescriptor',
      tableType: 'TableType',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      createTime: 'number',
      creatorId: 'number',
      dbId: 'number',
      dbName: 'string',
      description: 'string',
      lastAccessTime: 'number',
      location: 'string',
      modifierId: 'number',
      name: 'string',
      owner: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionKeys: { 'type': 'array', 'itemType': DLColumn },
      retention: 'number',
      storageDescriptor: DLStorageDescriptor,
      tableType: 'string',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.storageDescriptor && typeof (this.storageDescriptor as any).validate === 'function') {
      (this.storageDescriptor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

