// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request was successful. Other values indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the operation.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * EventRuleFilterPatternSchemaError
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7439944D-D9FC-5614-B65E-07A468988924
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, the value true is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

