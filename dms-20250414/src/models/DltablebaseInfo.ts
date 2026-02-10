// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";


export class DLTablebaseInfo extends $dara.Model {
  /**
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @example
   * 1608707407
   */
  createTime?: number;
  /**
   * @example
   * 141****
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
   * "table"
   */
  description?: string;
  /**
   * @example
   * 1731586286
   */
  lastAccessTime?: number;
  /**
   * @example
   * oss://xxx
   */
  location?: string;
  /**
   * @example
   * 1731585286
   */
  modifierId?: number;
  /**
   * @example
   * 100g_customer
   */
  name?: string;
  /**
   * @example
   * test
   */
  owner?: string;
  ownerType?: string;
  /**
   * @example
   * "EXTERNAL": "TRUE"
   */
  parameters?: { [key: string]: any };
  partitionKeys?: DLColumn[];
  /**
   * @example
   * 30000
   */
  retention?: number;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

