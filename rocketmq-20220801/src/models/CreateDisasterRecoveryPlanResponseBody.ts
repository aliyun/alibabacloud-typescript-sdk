// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDisasterRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, provided only in scenarios where access is denied due to lack of RAM permissions
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
   * The result, which is the backup plan ID
   * 
   * @example
   * 1234
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
   * C7E8AE3A-219B-52EE-BE32-4036F5xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful
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

