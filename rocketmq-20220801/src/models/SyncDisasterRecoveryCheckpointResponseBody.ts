// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDisasterRecoveryCheckpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Result Data
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic Error Code
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP Status Code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 7358418D-83BD-507A-8079-611C63E05674
   */
  requestId?: string;
  /**
   * @remarks
   * Success or Not
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
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
      code: 'string',
      data: 'boolean',
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

