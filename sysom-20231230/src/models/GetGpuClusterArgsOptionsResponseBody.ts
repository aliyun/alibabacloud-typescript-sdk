// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterArgsOptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code, which is Success or Sysom.ServerError.
   * 
   * @example
   * Success  Fail
   */
  code?: string;
  /**
   * @remarks
   * The result of the parameter retrieval.
   * 
   * @example
   * ["instance1", "instance2"]
   */
  data?: any;
  /**
   * @remarks
   * The error message returned when the code is not Success.
   * 
   * @example
   * some error msg while fail，“” if success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * return real request id
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned items.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

