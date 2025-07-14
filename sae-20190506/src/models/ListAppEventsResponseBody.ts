// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppEventsResponseBodyDataAppEventEntity extends $dara.Model {
  causeAnalysis?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence of the event.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The timestamp of the last occurrence of the event.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The information about the event.
   * 
   * @example
   * Created container
   */
  message?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * @example
   * Pod
   */
  objectKind?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-2****
   */
  objectName?: string;
  /**
   * @remarks
   * The cause of the event.
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
   * The events.
   */
  appEventEntity?: ListAppEventsResponseBodyDataAppEventEntity[];
  /**
   * @remarks
   * The number of the returned page.
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
   * The total number of events that occurred in an application.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The events.
   */
  data?: ListAppEventsResponseBodyData;
  /**
   * @remarks
   * The error code returned if the call failed. Take note of the following rules:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * Indicates whether the events that occurred in the application were queried. Valid values:
   * 
   * *   **true**: The events were queried.
   * *   **false**: The events failed to be queried.
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

