// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Param.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the resource was successfully moved. Valid values:
   * 
   * *   **true**: The resource was successfully moved.
   * *   **false**: The resource failed to be moved.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Request.Forbidden
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * RAM DENY
   */
  errMessage?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * The resource group is forbidden to operate
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04EBD9F5-F06F-5302-8499-005C72*******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

