// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationMseServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * mse-cn-hvm47******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * sae-ent
   */
  mseAppNameSpace?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * *   EXPIRED
   * *   REBOOTING
   * *   WAITING
   * *   FAIL
   * *   NULL/SUCCESS
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseAppNameSpace: 'MseAppNameSpace',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mseAppId: 'string',
      mseAppName: 'string',
      mseAppNameSpace: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMseServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Valid values: 2xx: The request was successful. 3xx: The request was redirected. 4xx: The request was invalid. 5xx: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The application information.
   */
  data?: DescribeApplicationMseServiceResponseBodyData;
  /**
   * @remarks
   * The error code. Value description:
   * 
   * *   If the request succeeds, this field is not returned.
   * *   For more information, see the **Error codes** section of this topic.
   * 
   * @example
   * System.Upgrading
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Value description:
   * 
   * *   If the request was successful, **success** is returned.
   * *   If the request failed, an error code is returned.
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
   * Indicates whether the application instance groups were obtained successfully. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace, which is used to query the exact call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
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
      data: DescribeApplicationMseServiceResponseBodyData,
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

