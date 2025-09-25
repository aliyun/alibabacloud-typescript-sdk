// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * null
   */
  providerType?: string;
  /**
   * @example
   * b0a202e2-5031-4589-a6d7-39185f0d8d01
   */
  requestId?: string;
  /**
   * @example
   * {
   *           "Status": "Success",
   *           "Data": {},
   *           "Message": null,
   *           "TaskId": "docmind-20240601-123abc"
   *         }
   */
  result?: { [key: string]: any };
  resultUrl?: string;
  /**
   * @example
   * WaitRefresh
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'fileType',
      providerType: 'providerType',
      requestId: 'requestId',
      result: 'result',
      resultUrl: 'resultUrl',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      providerType: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetParseResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0abb793617204049360065953ec6dd
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetParseResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

