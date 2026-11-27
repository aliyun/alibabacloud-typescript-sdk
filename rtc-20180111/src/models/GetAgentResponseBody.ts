// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @remarks
   * Start timestamp, in Unix time, measured in milliseconds.
   * 
   * @example
   * 1751513144838
   */
  startTime?: string;
  /**
   * @remarks
   * Agent status. Valid values: 0 (not started), 1 (starting), 2 (running), 3 (stopping), 4 (stopped), or 5 (failed).
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * End timestamp, in Unix time, measured in milliseconds.
   * 
   * @example
   * 1751513144838
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

