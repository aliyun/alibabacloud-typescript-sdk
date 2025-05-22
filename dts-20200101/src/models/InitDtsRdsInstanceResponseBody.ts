// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitDtsRdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The built-in account that is used by DTS to connect to the node.
   * 
   * @example
   * rdsdt_dtsacct
   */
  adminAccount?: string;
  /**
   * @remarks
   * The password of the built-in account.
   * 
   * @example
   * 1jecpqrtc****
   */
  adminPassword?: string;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7796ECE0-9C17-5E4D-9CE6-B7EC825A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      adminAccount: 'AdminAccount',
      adminPassword: 'AdminPassword',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccount: 'string',
      adminPassword: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
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

