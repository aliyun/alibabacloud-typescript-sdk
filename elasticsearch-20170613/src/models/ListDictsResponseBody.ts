// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The link that is used to download the dictionary over the Internet. The link is valid for 90s.
   * 
   * @example
   * http://test_bucket.oss-cn-hangzhou.aliyuncs.com/AliyunEs/test.dic?Expires=162573****&OSSAccessKeyId=LTAI*****V9&Signature=PNPO********BBGsJDO4V3VfU4sE%3D
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The size of the dictionary file. Unit: byte.
   * 
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the IK dictionary. Valid values:
   * 
   * *   MAIN: main dictionary
   * *   STOP: stopword list
   * 
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   */
  headers?: ListDictsResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2937F832-F39E-41EF-89BA-B528342A2A3A
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDictsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

