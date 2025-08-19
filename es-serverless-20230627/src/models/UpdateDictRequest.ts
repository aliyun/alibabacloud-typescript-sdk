// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDictRequestFilesOssObject extends $dara.Model {
  /**
   * @example
   * bucket1
   */
  bucketName?: string;
  /**
   * @example
   * oss/dic_0.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequestFiles extends $dara.Model {
  /**
   * @example
   * dic_0.dic
   */
  name?: string;
  ossObject?: UpdateDictRequestFilesOssObject;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ossObject: 'ossObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossObject: UpdateDictRequestFilesOssObject,
    };
  }

  validate() {
    if(this.ossObject && typeof (this.ossObject as any).validate === 'function') {
      (this.ossObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowCover?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  files?: UpdateDictRequestFiles[];
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * MAIN
   */
  type?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCover: 'allowCover',
      files: 'files',
      sourceType: 'sourceType',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCover: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateDictRequestFiles },
      sourceType: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

