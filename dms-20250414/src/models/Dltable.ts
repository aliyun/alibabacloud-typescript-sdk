// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLTable extends $dara.Model {
  /**
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @example
   * 1731586286
   */
  createTime?: number;
  /**
   * @example
   * 8****
   */
  creatorId?: number;
  /**
   * @example
   * 19
   */
  dbId?: number;
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1608707407
   */
  lastAccessTime?: number;
  /**
   * @example
   * oss://xxx
   */
  location?: string;
  /**
   * @example
   * 1410769
   */
  modifierId?: number;
  /**
   * @example
   * 100g_customer
   */
  name?: string;
  /**
   * @example
   * zhangsan
   */
  owner?: string;
  /**
   * @example
   * USER
   */
  ownerType?: string;
  /**
   * @example
   * {
   *       "EXTERNAL": "TRUE",
   *       "delta.minReaderVersion": "1"}
   */
  parameters?: { [key: string]: any };
  partitionKeys?: DLColumn[];
  /**
   * @example
   * 300
   */
  retention?: number;
  storageDescriptor?: DLStorageDescriptor;
  /**
   * @example
   * EXTERNAL_TABLE
   */
  tableType?: string;
  /**
   * @example
   * ""
   */
  viewExpandedText?: string;
  /**
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

