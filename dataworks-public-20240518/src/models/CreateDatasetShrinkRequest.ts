// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetShrinkRequest extends $dara.Model {
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
  initVersionShrink?: string;
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

