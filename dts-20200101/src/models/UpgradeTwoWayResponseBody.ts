// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeTwoWayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message. This parameter is used to replace **%s** in the error message returned by the **ErrMessage** parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **InstanceId**, the **InstanceId** request parameter is invalid.
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
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
   * The ID of the request.
   * 
   * @example
   * 2D3B4615-923F-49AA-AF21-6D8E3967****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
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
      dynamicCode: 'string',
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

