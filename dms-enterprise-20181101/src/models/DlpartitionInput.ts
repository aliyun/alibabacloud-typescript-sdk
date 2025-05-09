// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLStorageDescriptor } from "./DlstorageDescriptor";


export class DLPartitionInput extends $dara.Model {
  createTime?: number;
  lastAccessTime?: number;
  parameters?: { [key: string]: string };
  storageDescriptor?: DLStorageDescriptor;
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

