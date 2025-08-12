// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, the return value is null. If the request failed, an error message is returned.
   * 
   * @example
   * ComparisonOperator is mandatory for this action.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65D50468-ECEF-48F1-A6E1-D952E89D9432
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

