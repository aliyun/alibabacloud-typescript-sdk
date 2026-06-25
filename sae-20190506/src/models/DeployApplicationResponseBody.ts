// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The returned change order ID. Use it to query task execution status.
   * 
   * @example
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * Whether RAM users need approval to deploy changes. Values:
   * 
   * - **true**: Approval required.
   * 
   * - **false**: No approval required.
   * 
   * @example
   * true
   */
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Values:
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Request error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DeployApplicationResponseBodyData;
  /**
   * @remarks
   * The error code. Values:
   * 
   * - On success: This field is not returned.
   * 
   * - On failure: This field is returned. For details, see the **Error codes** section in this topic.
   * 
   * @example
   * 空
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Values:
   * 
   * - On success, returns **success**.
   * 
   * - On failure, returns a specific error code.
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
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3***
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the deployment succeeded. Values:
   * 
   * - **true**: Deployment succeeded.
   * 
   * - **false**: Deployment failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID for precise query of call information.
   * 
   * @example
   * ac1a0b2215622246421415014e****
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
      data: DeployApplicationResponseBodyData,
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

