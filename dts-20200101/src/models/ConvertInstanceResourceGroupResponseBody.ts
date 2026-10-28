// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend error code, which is an incrementing number.
   * 
   * @example
   * 500
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the error message of the **ErrMessage** response parameter.
   * > If **The Value of Input Parameter %s is not valid** is returned and the DynamicMessage parameter returns DtsJobId, it indicates that the specified DtsJobId request parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
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
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD823BD3-1BA6-4117-A536-165CB280****
   */
  requestId?: string;
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
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

