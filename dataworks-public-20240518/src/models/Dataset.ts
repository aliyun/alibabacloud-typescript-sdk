// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetLabel } from "./DatasetLabel";
import { DatasetVersion } from "./DatasetVersion";


export class Dataset extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset. The length cannot exceed 1024 characters.
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736756055000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 210484359
   */
  creatorId?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   COMMON
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
   * The dataset ID.
   * 
   * @example
   * dataworks-dataset:1gxxxqjx155usz3hrv
   */
  id?: string;
  /**
   * @remarks
   * Dataset tags. Supported only for PAI datasets.
   */
  labels?: DatasetLabel[];
  /**
   * @remarks
   * The latest dataset version object.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The modification time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1736756055000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The dataset name. It must be a non-empty string and cannot exceed 128 characters.
   * 
   * @example
   * test_dataset
   */
  name?: string;
  /**
   * @remarks
   * The source of the dataset. Currently supported sources:
   * 
   * *   DataWorks
   * *   PAI
   * 
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * Instructions for using the dataset. Markdown rich text is supported.
   * 
   * @example
   * ## introduction
   */
  readme?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   OSS: Object Storage Service
   * *   NAS: General-purpose NAS file systems
   * *   EXTREM_NAS: Extreme NAS file systems
   * *   DLF_LANCE: Data Lake Formation
   * *   CPFS: Cloud Paralleled File System
   * *   BMCPFS: CPFS for Lingjun
   * *   MAXCOMPUTE: MaxCompute table
   * 
   * @example
   * OSS
   */
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

