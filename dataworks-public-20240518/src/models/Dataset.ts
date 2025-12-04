// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetLabel } from "./DatasetLabel";
import { DatasetVersion } from "./DatasetVersion";


export class Dataset extends $dara.Model {
  comment?: string;
  createTime?: number;
  creatorId?: string;
  dataType?: string;
  id?: string;
  labels?: DatasetLabel[];
  latestVersion?: DatasetVersion;
  modifyTime?: number;
  name?: string;
  origin?: string;
  projectId?: number;
  readme?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      dataType: 'DataType',
      id: 'Id',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modifyTime: 'ModifyTime',
      name: 'Name',
      origin: 'Origin',
      projectId: 'ProjectId',
      readme: 'Readme',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creatorId: 'string',
      dataType: 'string',
      id: 'string',
      labels: { 'type': 'array', 'itemType': DatasetLabel },
      latestVersion: DatasetVersion,
      modifyTime: 'number',
      name: 'string',
      origin: 'string',
      projectId: 'number',
      readme: 'string',
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

