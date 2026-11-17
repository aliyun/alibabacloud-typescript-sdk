// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventsResponseBodyDataResultsError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * This parameter is required.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is required.
   * 
   * @example
   * The format of the event content is incorrect
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventsResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The error information for the failed item.
   */
  error?: CreateEventsResponseBodyDataResultsError;
  /**
   * @remarks
   * The event ID generated after the event is successfully saved.
   * 
   * @example
   * evt-2f5f9c5a8d0e4c3b
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event reached the server after being successfully saved. The value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1758614401000
   */
  receivedAt?: number;
  /**
   * @remarks
   * STORED or FAILED.
   * 
   * This parameter is required.
   * 
   * @example
   * STORED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      eventId: 'eventId',
      receivedAt: 'receivedAt',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: CreateEventsResponseBodyDataResultsError,
      eventId: 'string',
      receivedAt: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The write results for each item. A successful outer response does not indicate that every item was written successfully.
   * 
   * This parameter is required.
   */
  results?: CreateEventsResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': CreateEventsResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   */
  data?: CreateEventsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message about the request processing.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used for troubleshooting.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. For batch operations, you must still check the result of each item.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEventsResponseBodyData,
      httpStatusCode: 'number',
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

