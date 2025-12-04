// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetLabel } from "./DatasetLabel";


export class DatasetVersion extends $dara.Model {
  comment?: string;
  createTime?: number;
  creatorId?: string;
  datasetId?: string;
  id?: string;
  importInfo?: { [key: string]: string };
  labels?: DatasetLabel[];
  modifyTime?: number;
  mountPath?: string;
  storageType?: string;
  url?: string;
  versionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      datasetId: 'DatasetId',
      id: 'Id',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      modifyTime: 'ModifyTime',
      mountPath: 'MountPath',
      storageType: 'StorageType',
      url: 'Url',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creatorId: 'string',
      datasetId: 'string',
      id: 'string',
      importInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labels: { 'type': 'array', 'itemType': DatasetLabel },
      modifyTime: 'number',
      mountPath: 'string',
      storageType: 'string',
      url: 'string',
      versionNumber: 'number',
    };
  }

  validate() {
    if(this.importInfo) {
      $dara.Model.validateMap(this.importInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

