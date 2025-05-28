// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDisasterRecoveryItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, only in the scenario where the user is denied access due to RAM not having permission
   * 
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return result, mapping task ID
   * 
   * @example
   * 1300000016
   */
  data?: number;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * xxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

