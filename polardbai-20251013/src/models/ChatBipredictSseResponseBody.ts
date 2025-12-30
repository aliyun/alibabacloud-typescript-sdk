// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPredictSseResponseBody extends $dara.Model {
  /**
   * @example
   * sql，取数，总结，图表
   */
  data?: any;
  /**
   * @example
   * 错误码
   */
  errCode?: string;
  /**
   * @example
   * 错误信息
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 737A7E8B-9C9E-5EE6-8A04-D61400A5D083
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

