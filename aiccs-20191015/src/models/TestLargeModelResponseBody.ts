// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestLargeModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * {\\"code\\":\\"InvalidApiKey\\",\\"message\\":\\"Invalid API-key provided.\\",\\"request_id\\":\\"dd14065e-3dd5-90a1-b8ee-d6c80891defe\\"}
   */
  errorMsg?: string;
  /**
   * @remarks
   * 模型版本号
   * 
   * @example
   * 1
   */
  modelVersion?: string;
  /**
   * @remarks
   * 输出结果
   * 
   * @example
   * 示例值
   */
  output?: string;
  /**
   * @remarks
   * 是否成功
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      modelVersion: 'ModelVersion',
      output: 'Output',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      modelVersion: 'string',
      output: 'string',
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

export class TestLargeModelResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: TestLargeModelResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F2051E18-FF3F-5C08-8D24-6F150D2AF757
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': TestLargeModelResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

