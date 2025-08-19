// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * http://es-serverless-****.oss-cn-hangzhou.aliyuncs.com/app/es7**190/0/config/analysis-ik/stopword.dic?Expires=1705923089&OSSAccessKeyId=STS.NV18q****UkVp6LNj&Signat
   */
  downloadUrl?: string;
  /**
   * @example
   * a.dic
   */
  name?: string;
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
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
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
   * @example
   * E92BCBB9-3CFE-58DD-8D8C-56DF46AB3BF3
   */
  requestId?: string;
  result?: ListDictsResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

