// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event stream.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventstreaming/myeventstreaming
   */
  eventStreamingARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingARN: 'EventStreamingARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned code. Valid values:
   * - Success: The request was successful.                                
   * - Other values: An error occurred. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateEventStreamingResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The name [xxxx] of event streaming in request is already exist!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B896B484-F16D-59DE-9E23-DD0E5C36****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. The value true is returned if the operation was successful.
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
      data: CreateEventStreamingResponseBodyData,
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

