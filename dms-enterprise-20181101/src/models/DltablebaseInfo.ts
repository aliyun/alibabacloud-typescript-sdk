// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";


export class DLTablebaseInfo extends $dara.Model {
  /**
   * @remarks
   * The catalog to which the table belongs.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The time when the table was created.
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
   * 141****
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
   * 100g_customer
   */
  dbName?: string;
  /**
   * @remarks
   * The comment of the table.
   * 
   * @example
   * "table"
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
   * The time when the table was modified.
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
   * The owner of the table.
   * 
   * @example
   * test
   */
  owner?: string;
  /**
   * @remarks
   * The type of the table owner. Valid values: USER, ROLE, and GROUP.
   * 
   * @example
   * ROLE
   */
  ownerType?: string;
  /**
   * @remarks
   * Additional parameters for the table.
   * 
   * @example
   * "EXTERNAL": "TRUE"
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The column attributes of the table.
   */
  partitionKeys?: DLColumn[];
  /**
   * @remarks
   * The retention period of the table. Unit: days.
   * 
   * @example
   * 30000
   */
  retention?: number;
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

