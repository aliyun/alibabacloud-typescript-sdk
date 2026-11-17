// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventsResponseBodyDataResultsError extends $dara.Model {
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
   * The error description.
   * 
   * This parameter is required.
   * 
   * @example
   * The event content format is incorrect
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

export class DeleteEventsResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The error details for failed items.
   */
  error?: DeleteEventsResponseBodyDataResultsError;
  /**
   * @remarks
   * The ID of the event requested to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * evt-2f5f9c5a8d0e4c3b
   */
  eventId?: string;
  /**
   * @remarks
   * Valid values: DELETED, NOT_FOUND, and FAILED.
   * 
   * This parameter is required.
   * 
   * @example
   * DELETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      eventId: 'eventId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: DeleteEventsResponseBodyDataResultsError,
      eventId: 'string',
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

export class DeleteEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The itemized deletion results.
   * 
   * This parameter is required.
   */
  results?: DeleteEventsResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': DeleteEventsResponseBodyDataResults },
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

export class DeleteEventsResponseBody extends $dara.Model {
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
   * The operation results.
   */
  data?: DeleteEventsResponseBodyData;
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
   * The description of the request processing result.
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
   * Indicates whether the request was successful. For batch API operations, you must still check the results of individual items.
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
      data: DeleteEventsResponseBodyData,
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

