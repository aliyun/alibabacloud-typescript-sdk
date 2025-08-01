// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetZookeeperDataImportUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 250000
   */
  maxSize?: string;
  /**
   * @remarks
   * The maximum size of a file that can be uploaded each time. Unit: MB.
   * 
   * @example
   * http://xxxxxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZookeeperDataImportUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The URL that is used to upload the configuration file.
   */
  data?: GetZookeeperDataImportUrlResponseBodyData;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request was successfully processed.
   * 
   * @example
   * The dynamic part in the error message.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * E4E2058F-C524-5C29-9BC7-5874EA8D7CE2
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. A value of 200 is returned if the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
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
      data: GetZookeeperDataImportUrlResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

