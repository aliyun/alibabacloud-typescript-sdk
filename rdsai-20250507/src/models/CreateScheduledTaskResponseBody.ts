// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D984FD38-6C2D-55DF-B0D7-8BCAC2E1F8C2
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scheduled inspection configuration.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      scheduledId: 'ScheduledId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      scheduledId: 'string',
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

