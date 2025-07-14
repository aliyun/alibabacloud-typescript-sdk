// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved.
   */
  crUrl?: string;
  /**
   * @remarks
   * This parameter is reserved.
   */
  logo?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * demo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
   * 
   * @example
   * demo
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the repository. Only Container Registry is supported.
   * 
   * @example
   * ALI_HUB
   */
  repoOriginType?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * latest
   */
  repoTag?: string;
  /**
   * @remarks
   * This parameter is reserved.
   */
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      crUrl: 'CrUrl',
      logo: 'Logo',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      repoTag: 'RepoTag',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crUrl: 'string',
      logo: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      repoTag: 'string',
      repoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponseBody extends $dara.Model {
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
   * The information about the image of the application.
   */
  data?: DescribeApplicationImageResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the information about the image was obtained. Valid values:
   * 
   * *   **true**: The information was obtained.
   * *   **false**: The information failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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
      data: DescribeApplicationImageResponseBodyData,
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

