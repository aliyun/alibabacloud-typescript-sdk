// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/mymns.source
   */
  eventSourceARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceARN: 'EventSourceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateEventSourceResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Remote error. requestId: [A8EFABD2-95B9-1C46-9E01-xxxx], error code: [CreateRelatedResourceFailed], message: [Create related resource failed, EntityNotExist.Role : The role not exists: xxxx. \\r\\nRequestId : xxxx-168C-54ED-8FEB-BF11CB70AEB7]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2922208e-e1c6-43ee-bfd1-aca50263bc8a
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. The value true indicates that the operation is successful.
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
      data: CreateEventSourceResponseBodyData,
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

