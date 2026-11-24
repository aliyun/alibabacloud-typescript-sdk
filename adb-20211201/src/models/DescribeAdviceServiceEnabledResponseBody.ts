// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdviceServiceEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the call result. 
   * - If the request is successful, **Success** is returned. 
   * - If the request fails, the specific error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the advisory service is enabled. Valid values:
   * - **True**: Enabled. 
   * - **False**: Disabled.
   * 
   * @example
   * False
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

