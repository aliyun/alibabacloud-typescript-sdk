// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestInitVersion extends $dara.Model {
  /**
   * @example
   * Initial Version
   */
  comment?: string;
  importInfo?: { [key: string]: string };
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  /**
   * @remarks
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
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  initVersion?: CreateDatasetRequestInitVersion;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_oss_dataset
   */
  name?: string;
  /**
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
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

