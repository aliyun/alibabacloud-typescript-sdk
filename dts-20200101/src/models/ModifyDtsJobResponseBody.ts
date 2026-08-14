// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DTS task ID.
   * 
   * @example
   * bi6e22a****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * > The data type of this parameter should be String. An example value is **The request processing has failed due to some unknown error**.
   * 
   * @example
   * true
   */
  errMessage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D6ECADF-C5E9-4C96-8811-77602B31****
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
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

