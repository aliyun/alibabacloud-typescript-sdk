// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventsResponseBodyDataEntryList extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success indicates success. Other values indicate exceptions
   */
  errorCode?: string;
  /**
   * @remarks
   * The detailed error description.
   * 
   * @example
   * triggerPicture failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 4c8b7500-2aea-4f5a-b7dd-9d9dd986c07d
   */
  eventId?: string;
  /**
   * @remarks
   * The trace ID, which is used to query the exact call information.
   * 
   * @example
   * 4E17C677F5357FB23D1A7FF964CD1999
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      eventId: 'EventId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      eventId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collection of event sending results.
   */
  entryList?: PutEventsResponseBodyDataEntryList[];
  /**
   * @remarks
   * The number of events that failed to be sent.
   * 
   * @example
   * 2
   */
  failedEntryCount?: number;
  static names(): { [key: string]: string } {
    return {
      entryList: 'EntryList',
      failedEntryCount: 'FailedEntryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryList: { 'type': 'array', 'itemType': PutEventsResponseBodyDataEntryList },
      failedEntryCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entryList)) {
      $dara.Model.validateArray(this.entryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: PutEventsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generated for the request.
   * 
   * @example
   * 2BC1857D-E633-5E79-B2C2-43EF5F7730D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values: true: The operation was successful. false: The operation failed.
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
      data: PutEventsResponseBodyData,
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

