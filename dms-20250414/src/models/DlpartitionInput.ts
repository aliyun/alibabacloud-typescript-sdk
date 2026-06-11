// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLPartitionInput extends $dara.Model {
  /**
   * @remarks
   * The time when the partition was created. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735109884
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the partition was last accessed. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735109884
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The key-value pair parameters for the partition.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The data storage information of the data lakehouse table.
   */
  storageDescriptor?: DLStorageDescriptor;
  /**
   * @remarks
   * The partition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastAccessTime: 'LastAccessTime',
      parameters: 'Parameters',
      storageDescriptor: 'StorageDescriptor',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      lastAccessTime: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      storageDescriptor: DLStorageDescriptor,
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.storageDescriptor && typeof (this.storageDescriptor as any).validate === 'function') {
      (this.storageDescriptor as any).validate();
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

