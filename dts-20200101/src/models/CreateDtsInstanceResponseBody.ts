// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDtsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dtsbi6e22ay243****
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bi6e22ay243****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      instanceId: 'string',
      jobId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

