// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdleInstanceCullerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * *   If the request is successful, null is returned.
   * *   If the request fails, the failure cause is returned.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
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

