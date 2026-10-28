// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter will be deprecated soon.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the **ErrMessage** parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified **DtsJobId** request parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
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
   * 8C498360-7892-433C-847A-BA71A850****
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

