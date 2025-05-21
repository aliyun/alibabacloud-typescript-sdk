// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdviceServiceEnabledResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * [Advisor] Advisor feature is not available for instance: am-2ze0vp0j6t3to****
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
   * Indicates whether the suggestion feature is enabled. Valid values:
   * 
   * *   **True**
   * *   **False**
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

