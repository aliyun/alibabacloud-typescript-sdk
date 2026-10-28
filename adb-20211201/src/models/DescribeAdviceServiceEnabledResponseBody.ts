// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdviceServiceEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message about the call result. Valid values:
   * - **Success**: The request is successful. 
   * - Specific error message: Returned when an exception occurs.
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
   * - **True**: The advisory service is enabled. 
   * - **False**: The advisory service is disabled.
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

