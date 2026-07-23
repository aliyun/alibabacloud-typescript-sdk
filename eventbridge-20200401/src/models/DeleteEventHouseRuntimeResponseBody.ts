// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventHouseRuntime } from "./EventHouseRuntime";


export class DeleteEventHouseRuntimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Success indicates that the operation was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The Runtime information.
   */
  data?: EventHouseRuntime;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EventHouseRuntime,
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

