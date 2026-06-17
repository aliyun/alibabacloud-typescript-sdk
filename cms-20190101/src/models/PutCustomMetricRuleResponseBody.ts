// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * 状态码。
   * 
   * > 200表示成功。
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 返回信息。接口调用成功时，返回为空；接口调用失败时，返回失败原因。
   * 
   * @example
   * ComparisonOperator is mandatory for this action.
   */
  message?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * 65D50468-ECEF-48F1-A6E1-D952E89D9432
   */
  requestId?: string;
  /**
   * @remarks
   * 操作是否成功。取值：
   * 
   * - true：成功。
   * 
   * - false：失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

