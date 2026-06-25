// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppEventsResponseBodyDataAppEventEntity extends $dara.Model {
  /**
   * @remarks
   * The cause analysis.
   */
  causeAnalysis?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The timestamp of the event\\"s first occurrence.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The timestamp of the event\\"s last occurrence.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Created container
   */
  message?: string;
  /**
   * @remarks
   * The object kind.
   * 
   * @example
   * Pod
   */
  objectKind?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-2****
   */
  objectName?: string;
  /**
   * @remarks
   * The reason for the event.
   * 
   * @example
   * Created
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      causeAnalysis: 'CauseAnalysis',
      eventType: 'EventType',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causeAnalysis: 'string',
      eventType: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      objectKind: 'string',
      objectName: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array of application events.
   */
  appEventEntity?: ListAppEventsResponseBodyDataAppEventEntity[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count of application events.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      appEventEntity: 'AppEventEntity',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEventEntity: { 'type': 'array', 'itemType': ListAppEventsResponseBodyDataAppEventEntity },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appEventEntity)) {
      $dara.Model.validateArray(this.appEventEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned for the request. Valid values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Client error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The event list.
   */
  data?: ListAppEventsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * 
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error Codes** section.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the request result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAppEventsResponseBodyData,
      errorCode: 'string',
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

