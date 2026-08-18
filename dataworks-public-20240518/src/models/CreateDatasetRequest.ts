// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestInitVersion extends $dara.Model {
  /**
   * @remarks
   * The description. The value can be up to 1024 characters in length.
   * 
   * @example
   * Initial Version
   */
  comment?: string;
  /**
   * @remarks
   * The storage import configuration of the dataset. The required configuration varies depending on the storage type.
   * <details>
   * <summary>NAS</summary>
   * The values can be obtained from the response of the File Storage NAS API DescribeFileSystems operation.
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
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The mount path. The value must start with /mnt/. Default value: /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The URL.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-oss-bucket/test_dir/
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      importInfo: 'ImportInfo',
      mountPath: 'MountPath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      importInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      mountPath: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.importInfo) {
      $dara.Model.validateMap(this.importInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset. The value can be up to 1024 characters in length.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * - COMMON: general-purpose (default).
   * - PIC: image.
   * - TEXT: text.
   * - TABLE: table.
   * - VIDEO: video.
   * - AUDIO: audio.
   * - INDEX: index.
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The initial version of the dataset.
   * 
   * This parameter is required.
   */
  initVersion?: CreateDatasetRequestInitVersion;
  /**
   * @remarks
   * The name of the dataset. The value must be a non-empty string that is up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_oss_dataset
   */
  name?: string;
  /**
   * @remarks
   * The origin of the dataset. Only DataWorks is supported.
   * 
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * - OSS: Object Storage Service.
   * - NAS: general-purpose NAS file storage.
   * - EXTREMENAS: extreme NAS file storage.
   * - DLF_LANCE: Data Lake Formation.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      dataType: 'DataType',
      initVersion: 'InitVersion',
      name: 'Name',
      origin: 'Origin',
      projectId: 'ProjectId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dataType: 'string',
      initVersion: CreateDatasetRequestInitVersion,
      name: 'string',
      origin: 'string',
      projectId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    if(this.initVersion && typeof (this.initVersion as any).validate === 'function') {
      (this.initVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

