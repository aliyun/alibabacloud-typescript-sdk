// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSubTaskResultResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * https://mass.alipay.com/enhance/afts/file/n5XnQounknwAAAAAZfAAAAgAhvocAAFr?t=2hrPX0at3hhaRjlScory9JzLGiLchaonac5suH-Z1BgDAAAAZAABHPpobI2j
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadSubTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * E01E1B4A-6747-5329-9046-B6D6B2D91349
   */
  requestId?: string;
  resultObject?: DownloadSubTaskResultResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DownloadSubTaskResultResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

