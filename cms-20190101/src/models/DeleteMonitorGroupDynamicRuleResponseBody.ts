// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupDynamicRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 56B4516A-EB44-4C66-8854-0393B35F636B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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
      code: 'number',
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

