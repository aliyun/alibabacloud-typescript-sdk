// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  done?: boolean;
  fileCount?: number;
  fileSizeInBytes?: number;
  lastFileCreationTime?: number;
  recordCount?: number;
  spec?: { [key: string]: any };
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      done: 'done',
      fileCount: 'fileCount',
      fileSizeInBytes: 'fileSizeInBytes',
      lastFileCreationTime: 'lastFileCreationTime',
      recordCount: 'recordCount',
      spec: 'spec',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      done: 'boolean',
      fileCount: 'number',
      fileSizeInBytes: 'number',
      lastFileCreationTime: 'number',
      recordCount: 'number',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

