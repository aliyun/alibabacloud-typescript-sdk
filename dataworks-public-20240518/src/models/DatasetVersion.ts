// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetLabel } from "./DatasetLabel";


export class DatasetVersion extends $dara.Model {
  /**
   * @remarks
   * The dataset version description.
   * 
   * @example
   * Initial version
   */
  comment?: string;
  /**
   * @remarks
   * The creation timestamp in milliseconds.
   * 
   * @example
   * 1736756055000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 17815XXX61016173
   */
  creatorId?: string;
  /**
   * @remarks
   * The associated dataset ID.
   * 
   * @example
   * dataworks-datasetVersion:0gfxxxjx155usz3hrv
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version ID.
   * 
   * @example
   * dataworks-datasetVersion:0gfxxxjx155usz3hrv:1
   */
  id?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. The required configuration information varies based on the storage type.
   * <details>
   * <summary>NAS</summary>
   * For valid values, refer to the response of the DescribeFileSystems API operation.
   * 
   * ```JSON
   * {
   *   "fileSystemId": "3b6XXX89c9", // File system ID
   *   "fileSystemStorageType": "Performance", // Storage specification of the file system
   *   "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // VPC ID of the mount target
   * }
   * ```
   * 
   * </details>
   * 
   * @example
   * {"fileSystemId":"3b6XXX89c9","fileSystemStorageType":"Performance","vpcId":"vpc-uf66oxxxrqge1t2gson7s"}
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The PAI dataset labels.
   */
  labels?: DatasetLabel[];
  /**
   * @remarks
   * The modification timestamp in milliseconds.
   * 
   * @example
   * 1736756055000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The mount path. Default value: /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The storage type. This property is read-only and remains consistent with the corresponding property of the associated dataset.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * oss://test-oss-bucket/test_dir/
   */
  url?: string;
  /**
   * @remarks
   * The dataset version number.
   * 
   * @example
   * 1
   */
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

