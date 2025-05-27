// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyData } from "./GetRuleResponseBodyData";


export class GetRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned parameters.
   */
  data?: GetRuleResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The event rule not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BC1857D-E633-5E79-B2C2-43EF5F7730D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation is successful, the value true is returned.
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
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

