// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterConnectionTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connection type.
   * 
   * @example
   * slb
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListClusterConnectionTypesResponseBodyData[];
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8625467C-27DD-5711-878E-6857E3074937
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterConnectionTypesResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

