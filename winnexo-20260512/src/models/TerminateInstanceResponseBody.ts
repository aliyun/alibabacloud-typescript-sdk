// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The physical instance ID.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The status after termination.
   * 
   * @example
   * Terminated
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The state version.
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  /**
   * @remarks
   * Indicates whether the termination was successful. A value of true indicates success. If the termination fails, the error code and message are returned.
   * 
   * @example
   * true
   */
  terminated?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
      message: 'message',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
      terminated: 'terminated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      message: 'string',
      requestId: 'string',
      stateVersion: 'number',
      terminated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

