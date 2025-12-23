// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionDefaultInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The default instance name.
   * 
   * @example
   * model1
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionDefaultInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DefaultInstance.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * cdn_waf
   */
  functionName?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * sh-bp1oi31w1jn4ctdyv
   */
  instanceName?: string;
  /**
   * @remarks
   * The default running time.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * default instance not set.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 062BA91F-A568-5779-8A5B-9E62C9BB3DC1
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * {\\"Pagination\\": {\\"TotalCount\\": 0, \\"PageNumber\\": 1, \\"PageSize\\": 10}, \\"AntConsortiums\\": []}
   */
  result?: GetFunctionDefaultInstanceResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      functionName: 'FunctionName',
      httpCode: 'HttpCode',
      instanceName: 'InstanceName',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      functionName: 'string',
      httpCode: 'number',
      instanceName: 'string',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionDefaultInstanceResponseBodyResult,
      status: 'string',
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

