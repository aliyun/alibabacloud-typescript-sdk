// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetLabel } from "./DatasetLabel";


export class DatasetVersion extends $dara.Model {
  /**
   * @remarks
   * The dataset version description.
   */
  comment?: string;
  /**
   * @remarks
   * Creation time (milliseconds)
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
   * The corresponding dataset ID.
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
   * The storage import configuration for the dataset; required configuration varies by storage type.
   * 
   * **NAS**
   * 
   * Refer to the return values from the file storage API DescribeFileSystems.
   * 
   * ```JSON
   * {
   * "fileSystemId": "3b6XXX89c9", // The file system ID.
   * "fileSystemStorageType":  "Performance" // The file system storage type.
   * "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // The VPC ID of the mount point.
   * }
   * ```
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The PAI dataset label.
   */
  labels?: DatasetLabel[];
  /**
   * @remarks
   * Modification time (milliseconds)
   * 
   * @example
   * 1736756055000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The mount path. Defaults to /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * Storage type (read-only); consistent with the corresponding property of the parent dataset.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * URL
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

