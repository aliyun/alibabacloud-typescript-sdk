// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLTableInput extends $dara.Model {
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
   * 8****
   */
  creatorId?: number;
  /**
   * @remarks
   * The description of the table.
   * 
   * @example
   * test
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
   * The user who last modified the table.
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
   * zhangsan
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values: USER, ROLE, and GROUP.
   * 
   * @example
   * USER
   */
  ownerType?: string;
  /**
   * @remarks
   * The key-value pair parameters.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The list of attribute columns for the table.
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
   * The storage description. This includes the storage features and format details of the table.
   */
  storageDescriptor?: DLStorageDescriptor;
  /**
   * @remarks
   * The type of the metadata table. Examples: MANAGED_TABLE, EXTERNAL_TABLE, VIRTUAL_VIEW, INDEX_TABLE, and MATERIALIZED_VIEW.
   * 
   * @example
   * EXTERNAL_TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * If the table is a view, this parameter indicates the expanded text of the view.
   * 
   * @example
   * ""
   */
  viewExpandedText?: string;
  /**
   * @remarks
   * If the table is a view, this parameter indicates the original text of the view.
   * 
   * @example
   * ""
   */
  viewOriginalText?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
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
      createTime: 'number',
      creatorId: 'number',
      description: 'string',
      lastAccessTime: 'number',
      location: 'string',
      modifierId: 'number',
      name: 'string',
      owner: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

