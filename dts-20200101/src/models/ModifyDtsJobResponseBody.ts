// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * bi6e22a****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * >  The data type of this parameter is String. Sample value: **The actual sample value is The request processing has failed due to some unknown error.
   * 
   * @example
   * true
   */
  errMessage?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1D6ECADF-C5E9-4C96-8811-77602B31****
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      errCode: 'string',
      errMessage: 'boolean',
      requestId: 'string',
      status: 'string',
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

