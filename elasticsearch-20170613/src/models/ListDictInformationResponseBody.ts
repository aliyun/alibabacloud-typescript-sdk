// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictInformationResponseBodyResultOssObject extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket where the file is stored.
   * 
   * @example
   * es-osstest*
   */
  bucketName?: string;
  /**
   * @remarks
   * The MD5 checksum (ETag) of the OSS file, in uppercase.
   * 
   * @example
   * 2ABAB5E70BBF631145647F6BE533****
   */
  etag?: string;
  /**
   * @remarks
   * The storage path of the dictionary file in the OSS bucket.
   * 
   * @example
   * oss/dict_0*.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      etag: 'etag',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      etag: 'string',
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

export class ListDictInformationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 2202301
   */
  fileSize?: number;
  /**
   * @remarks
   * The details of the OSS file.
   */
  ossObject?: ListDictInformationResponseBodyResultOssObject;
  /**
   * @remarks
   * The dictionary type. Valid values:
   * 
   * - MAIN: primary tokenization dictionary
   * 
   * - STOP: stopword dictionary.
   * 
   * @example
   * STOP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      ossObject: 'ossObject',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      ossObject: ListDictInformationResponseBodyResultOssObject,
      type: 'string',
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

export class ListDictInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C4334EA-D22B-48BD-AE28-08EE68******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListDictInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDictInformationResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

