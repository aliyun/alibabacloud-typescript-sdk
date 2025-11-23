// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TryRunTaskFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed. Value values:
   * 
   * *   If the request was successful, the **ErrorCode** parameter is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * @example
   * 169****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9997630E-1993-5E6D-9DF1-4EFEE755FE31
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
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

