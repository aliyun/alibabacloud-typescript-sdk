// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAPSJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * aps-bj1xxxxxx
   */
  apsJobId?: string;
  /**
   * @remarks
   * The operation status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned. A value of 200 indicates that the request was sent successfully.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - If the request is normal, **OK** is returned.                                
   * - If the request is abnormal, a specific error code is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1B8ED33-5E9B-512D-B188-1579ED6xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      code: 'string',
      httpStatusCode: 'number',
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

