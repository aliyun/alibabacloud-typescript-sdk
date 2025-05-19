// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridDoubleWriteResponseBodyResult } from "./DescribeHybridDoubleWriteResponseBodyResult";


export class DescribeHybridDoubleWriteResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 7985D471-3FA8-4EE9-8F4B-45C19DF3D36F
   */
  requestId?: string;
  result?: DescribeHybridDoubleWriteResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeHybridDoubleWriteResponseBodyResult },
      success: 'string',
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

