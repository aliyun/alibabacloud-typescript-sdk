// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned when the call fails.
   * 
   * @example
   * DTS.Msg.InvalidEndpoint
   */
  errCode?: string;
  /**
   * @remarks
   * Error message returned when the call fails.
   * 
   * @example
   * The endpoint is invalid.
   */
  errMessage?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 3FA98DF2-2F81-51FF-8A38-AA5112DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
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

