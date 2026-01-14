// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance on which the origin probing task runs.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The response content returned by the origin probing task.
   * 
   * @example
   * 502 BadGateway
   */
  content?: string;
  /**
   * @remarks
   * The description of the diagnostic result. Valid values:
   * 
   * *   **All forward nodes work well.:** The origin server is normal.
   * *   **Endpoint network error.:** The origin server is abnormal. You must check whether the origin server is running as expected.
   * *   **Public network error.:** An Internet error occurred, which is a network error that occurred when the client connected to the acceleration region.
   * *   **Ga internal error.:** An internal error occurred. For example, an exception occurred when GA processed a request.
   * *   **Ga has been deleted.:** The current GA instance is deleted.
   * *   **Ga state is not stable.:** The current GA instance is in an unstable state, such as the Configuring state.
   * *   **Ga has no listener configuration.:** No listener is configured for the current GA instance.
   * *   **Missing endpoint configuration.:** No endpoint is configured.
   * *   **Missing acceleration region configuration.:** No acceleration region is configured.
   * *   **Missing endpointgroup configuration.:** No endpoint group is configured.
   * 
   * @example
   * All forward nodes work well
   */
  detail?: string;
  /**
   * @remarks
   * The time when the diagnosis of the origin probing task ends.
   * 
   * @example
   * 1663205460
   */
  detectTime?: string;
  /**
   * @remarks
   * The diagnostic result of the origin probing task. Valid values:
   * 
   * *   **success:** The origin probing task succeeded.
   * *   **failed:** The origin probing task failed.
   * 
   * @example
   * success
   */
  diagStatus?: string;
  /**
   * @remarks
   * The ID of the listener on which the origin probing task runs.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The network transmission protocol that is used by the listener. Valid values:
   * 
   * *   **tcp:** TCP.
   * *   **udp:** UDP.
   * *   **http:** HTTP.
   * *   **https:** HTTPS.
   * 
   * >  UDP listeners do not support probing.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The error code returned by the origin probing task.
   * 
   * @example
   * 502
   */
  statusCode?: string;
  /**
   * @remarks
   * The origin probing task ID.
   * 
   * @example
   * sm-bp1fpdjfju9k8yr1y****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      content: 'Content',
      detail: 'Detail',
      detectTime: 'DetectTime',
      diagStatus: 'DiagStatus',
      listenerId: 'ListenerId',
      port: 'Port',
      protocol: 'Protocol',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      content: 'string',
      detail: 'string',
      detectTime: 'string',
      diagStatus: 'string',
      listenerId: 'string',
      port: 'string',
      protocol: 'string',
      statusCode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorDetectResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the diagnostic result of the origin probing task.
   */
  applicationMonitorDetectResultList?: ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationMonitorDetectResultList: 'ApplicationMonitorDetectResultList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationMonitorDetectResultList: { 'type': 'array', 'itemType': ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationMonitorDetectResultList)) {
      $dara.Model.validateArray(this.applicationMonitorDetectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

