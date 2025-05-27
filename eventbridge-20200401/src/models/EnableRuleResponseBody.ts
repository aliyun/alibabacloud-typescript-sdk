// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * EventRuleNotExisted
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 580A938B-6107-586C-8EC7-F22EEBEDA9E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
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

