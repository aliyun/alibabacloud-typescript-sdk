// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * app-bd5e3533
   */
  appId?: string;
  /**
   * @remarks
   * The app name.
   * 
   * @example
   * TestApp_g5t
   */
  appName?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * 200
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * -
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code description.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. If the request is successful, "success" is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E604ABBF-FD0F-5080-BE2B-BCF674A9E941
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the app was created successfully. Valid values: true: The app was created successfully. false: The app failed to be created.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  userCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appId: 'AppId',
      appName: 'AppName',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userCode: 'UserCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appId: 'string',
      appName: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

