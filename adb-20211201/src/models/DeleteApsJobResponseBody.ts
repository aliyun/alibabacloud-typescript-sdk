// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * aps-*****
   */
  apsJobId?: string;
  /**
   * @remarks
   * The HTTP status code or the error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * OK
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****-****-5D14-AC9F-*********
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      code: 'Code',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
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
      errCode: 'string',
      errMessage: 'string',
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

