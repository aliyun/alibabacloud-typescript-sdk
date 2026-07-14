// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The result of the asynchronous task.
   * 
   * ## PDF translation task
   * 
   * The returned file_url is a downloadable file address.
   * 
   * ```
   * {
   *   "file_url": "https://finllmworks.oss-cn-zhangjiakou.aliyuncs.com/render_pdf/5336180997111160501.pdf"
   * }
   * ```
   * 
   * @example
   * {
   *   "file_url": "https://finllmworks.oss-cn-zhangjiakou.aliyuncs.com/render_pdf/5336180997111160501.pdf"
   * }
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D5D6BB5-BEAE-53C8-A70A-7275CC1F856C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

