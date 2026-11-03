// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationMseServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The MSE microservice governance application ID.
   * 
   * @example
   * mse-cn-hvm47******
   */
  mseAppId?: string;
  /**
   * @remarks
   * The MSE microservice governance application name.
   * 
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @remarks
   * The MSE microservice governance namespace.
   * 
   * @example
   * sae-ent
   */
  mseAppNameSpace?: string;
  /**
   * @remarks
   * The MSE microservice governance application status. Valid values:
   * - EXPIRED: The feature has expired or is not activated.
   * - REBOOTING: The application is restarting.
   * - WAITING: Waiting for the application to restart.
   * - FAIL: The activation failed.
   * - NULL/SUCCESS: The activation succeeded.
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
   * The API status code or POP error code. Valid values: 2xx: success. 3xx: redirection. 4xx: request error. 5xx: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The MSE microservice governance application information.
   */
  data?: DescribeApplicationMseServiceResponseBodyData;
  /**
   * @remarks
   * The error code. Details:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * System.Upgrading
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Details:
   * 
   * - If the request is normal, **success** is returned.
   * - If the request is abnormal, a specific error code is returned.
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
   * Indicates whether the application instance group was retrieved successfully. Valid values:
   * 
   * - **true**: The application instance group was retrieved successfully.
   * - **false**: The application instance group failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to precisely query trace information.
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

