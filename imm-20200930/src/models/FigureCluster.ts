// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class FigureCluster extends $dara.Model {
  averageAge?: number;
  cover?: File;
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  faceCount?: number;
  gender?: string;
  imageCount?: number;
  maxAge?: number;
  metaLockVersion?: number;
  minAge?: number;
  name?: string;
  objectId?: string;
  objectType?: string;
  ownerId?: string;
  projectName?: string;
  updateTime?: string;
  videoCount?: number;
  static names(): { [key: string]: string } {
    return {
      averageAge: 'AverageAge',
      cover: 'Cover',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      faceCount: 'FaceCount',
      gender: 'Gender',
      imageCount: 'ImageCount',
      maxAge: 'MaxAge',
      metaLockVersion: 'MetaLockVersion',
      minAge: 'MinAge',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      updateTime: 'UpdateTime',
      videoCount: 'VideoCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageAge: 'number',
      cover: File,
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      faceCount: 'number',
      gender: 'string',
      imageCount: 'number',
      maxAge: 'number',
      metaLockVersion: 'number',
      minAge: 'number',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      updateTime: 'string',
      videoCount: 'number',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

