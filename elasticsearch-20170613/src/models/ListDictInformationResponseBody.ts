// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictInformationResponseBodyResultOssObject extends $dara.Model {
  /**
   * @example
   * es-osstest*
   */
  bucketName?: string;
  /**
   * @example
   * 2ABAB5E70BBF631145647F6BE533****
   */
  etag?: string;
  /**
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
   * @example
   * 2202301
   */
  fileSize?: number;
  ossObject?: ListDictInformationResponseBodyResultOssObject;
  /**
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
   * @example
   * 7C4334EA-D22B-48BD-AE28-08EE68******
   */
  requestId?: string;
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

