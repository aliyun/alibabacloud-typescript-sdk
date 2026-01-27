// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSandboxInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Param.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * operation forbidden due to sandbox is creating.
   */
  data?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
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
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
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

