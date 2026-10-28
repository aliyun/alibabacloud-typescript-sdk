// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchPhysicalDtsJobToCloudResponseBody extends $dara.Model {
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
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when an error occurs.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * The request processing has failed due to some unknown error.
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
   * 659304E3-D44E-5EFA-BDE3-60015E30403B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
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

