// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLWebSocketDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * adb-ws-beijing.console.aliyun.com/query
   */
  domain?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - Returns **Success** if the request succeeds.
   * 
   * - Returns a specific error code if the request fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * E03F0806-A67B-5B24-8562-9589F20DEEB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * 
   * - **true**: The call succeeded.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domain: 'Domain',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      domain: 'string',
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

