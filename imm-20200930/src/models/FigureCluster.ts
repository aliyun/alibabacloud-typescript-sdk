// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class FigureCluster extends $dara.Model {
  /**
   * @remarks
   * The average age.
   * 
   * @example
   * 26
   */
  averageAge?: number;
  /**
   * @remarks
   * The cover image.
   */
  cover?: File;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The custom ID.
   * 
   * @example
   * abc
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels. You can search for clusters by label.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of faces.
   * 
   * @example
   * 3
   */
  faceCount?: number;
  /**
   * @remarks
   * The gender.
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 5
   */
  imageCount?: number;
  /**
   * @remarks
   * The maximum age.
   * 
   * @example
   * 44
   */
  maxAge?: number;
  /**
   * @remarks
   * The version of the metadata lock. A metadata lock version can be obtained by using a get or list operation. If you include the MetaLockVersion parameter in a request to update the cluster, the server checks consistency between the MetaLockVersion parameter value sent in the request and the one on the server side and updates the cluster only when they are consistent. This parameter prevents update conflicts in concurrent scenarios. The initial version is 0. The version is automatically increased by 1 after each successful update.
   * 
   * @example
   * 0
   */
  metaLockVersion?: number;
  /**
   * @remarks
   * The minimum age.
   * 
   * @example
   * 12
   */
  minAge?: number;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * Cluster-ae6e3472-999e-410b-b54e-cd5dba****
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the cluster.
   * 
   * @example
   * figure-cluster
   */
  objectType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 102321002****
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The number of videos.
   * 
   * @example
   * 3
   */
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

