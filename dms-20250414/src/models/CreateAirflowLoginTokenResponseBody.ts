// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAirflowLoginTokenResponseBodyData } from "./CreateAirflowLoginTokenResponseBodyData";


export class CreateAirflowLoginTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateAirflowLoginTokenResponseBodyData;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4284D079-30F4-5B23-ADC4-28F291622C9A
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAirflowLoginTokenResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
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

