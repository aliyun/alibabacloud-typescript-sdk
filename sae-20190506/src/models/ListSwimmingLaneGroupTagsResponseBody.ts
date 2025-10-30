// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"version":"1.0.0","owner":"team-a"}
   */
  metadata?: string;
  /**
   * @remarks
   * The label of the lane.
   * 
   * @example
   * {"alicloud.service.tag":"g1"}
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: Redirection.
   * *   **4xx**: Request error.
   * *   **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Responses.
   */
  data?: ListSwimmingLaneGroupTagsResponseBodyData[];
  /**
   * @remarks
   * Error code. Valid values:
   * 
   * *   If the request is successful, no **ErrorCode** fields are returned.
   * *   Request failed: **ErrorCode** fields are returned. For more information, see **Error codes**.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
   * 
   * *   The error message returned because the request is normal and **success** is returned.
   * *   If the request is abnormal, the specific exception error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the data is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. This parameter is used to query the exact call information.
   * 
   * @example
   * ac1a0b2215622920113732501e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupTagsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

