// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportNacosConfigResponseBodyData } from "./ImportNacosConfigResponseBodyData";


export class ImportNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The number of configurations that are imported.
   */
  data?: ImportNacosConfigResponseBodyData;
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The code returned.
   * 
   * @example
   * mse-100-100
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request is successfully processed.
   * 
   * @example
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
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
   * AF21683A-29C7-4853-AC0F-B5ADEE4****
   */
  requestId?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * true
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
      data: ImportNacosConfigResponseBodyData,
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

