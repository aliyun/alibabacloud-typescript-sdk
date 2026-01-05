// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestInitVersion extends $dara.Model {
  /**
   * @remarks
   * The description. It must not exceed 1,024 characters in length.
   * 
   * @example
   * Initial Version
   */
  comment?: string;
  /**
   * @remarks
   * The storage import configuration for the dataset. The required configuration information varies by storage type.
   * 
   * **NAS**
   * 
   * For valid values, refer to the response of the file storage API DescribeFileSystems.
   * 
   * ```JSON
   * {
   * "fileSystemId": "3b6XXX89c9", // The file system ID.
   * "fileSystemStorageType":  "Performance" // The storage specification of the file system.
   * "vpcId": "vpc-uf66oxxxrqge1t2gson7s" // The VPC ID of the mount point.
   * }
   * ```
   */
  importInfo?: { [key: string]: string };
  /**
   * @remarks
   * The mount path. It must start with /mnt/. Default value: /mnt/data.
   * 
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
   * URL
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
   * The description of the dataset. It must not exceed 1,024 characters in length.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   COMMON: Common (Default)
   * *   PIC
   * *   TEXT
   * *   TABLE
   * *   VIDEO
   * *   AUDIO
   * *   INDEX
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
   * The name of the dataset. It cannot be an empty string and must not exceed 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_oss_dataset
   */
  name?: string;
  /**
   * @remarks
   * The source of the dataset. Currently, only DataWorks is supported.
   * 
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The storage type. Currently supported values:
   * 
   * *   OSS
   * *   NAS: General-purpose NAS file systems
   * *   EXTREMENAS: Extreme NAS file systems
   * *   DLF_LANCE: Data Lake Formation
   * 
   * Valid values:
   * 
   * *   NAS: General-purpose NAS file systems
   * *   MAXCOMPUTE: MaxCompute table
   * *   CPFS: Cloud Parallel File Storage
   * *   BMCPFS: CPFS for Lingjun
   * *   EXTREMENAS: Extreme NAS file systems
   * *   OSS: Object Storage Service
   * *   DLF_LANCE: Data Lake Formation.
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

