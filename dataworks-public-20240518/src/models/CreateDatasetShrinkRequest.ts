// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
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
  initVersionShrink?: string;
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
      initVersionShrink: 'InitVersion',
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
      initVersionShrink: 'string',
      name: 'string',
      origin: 'string',
      projectId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

