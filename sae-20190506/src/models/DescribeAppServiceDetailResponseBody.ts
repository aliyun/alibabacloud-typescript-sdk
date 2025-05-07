// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppServiceDetailResponseBodyData } from "./DescribeAppServiceDetailResponseBodyData";


export class DescribeAppServiceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: indicates that the call was successful.
   * - **3xx**: indicates that the call was redirected.
   * - **4xx**: indicates that the call failed.
   * - **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeAppServiceDetailResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * - If the call is successful, the **ErrorCode** parameter is not returned.
   * - If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned information.
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
   * B2C7874F-F109-5B34-8618-2C10BBA2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the meta data was obtained. Valid values:
   * 
   * *   **true**: The metadata was obtained.
   * *   **false**: The metadata failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
   * 
   * @example
   * 0b16399316402420740034918e****
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
      data: DescribeAppServiceDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

