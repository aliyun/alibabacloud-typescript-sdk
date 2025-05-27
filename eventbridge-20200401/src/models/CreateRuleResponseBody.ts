// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleResponseBodyData } from "./CreateRuleResponseBodyData";


export class CreateRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateRuleResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Remote error. requestId: [xxxx], error code: [xxx], message: [The target in event rule is invalid! Endpoint is xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD6D598-7506-5D2C-81EA-30E3241A903A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
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
      data: CreateRuleResponseBodyData,
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

