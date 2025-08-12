// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates a success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5599964-8D0D-40DC-8E90-27A619384B81
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * *   true: successful.
   * *   false: failed.
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

