// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetSmartqStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  requestId?: string;
  /**
   * @remarks
   * Result of the API execution. Possible values:
   * - true: Request succeeded
   * - false: Request failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * 
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

