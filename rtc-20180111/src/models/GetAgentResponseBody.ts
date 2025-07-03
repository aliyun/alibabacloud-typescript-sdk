// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1751513144838
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
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

