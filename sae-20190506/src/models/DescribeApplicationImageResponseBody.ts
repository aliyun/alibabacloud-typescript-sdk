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
   * The image repository name.
   * 
   * @example
   * demo
   */
  repoName?: string;
  /**
   * @remarks
   * The image namespace.
   * 
   * @example
   * demo
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The image repository type. Currently, only Container Registry is supported.
   * 
   * @example
   * ALI_HUB
   */
  repoOriginType?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * latest
   */
  repoTag?: string;
  /**
   * @remarks
   * A reserved field.
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
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client-side error occurred.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The application image information.
   */
  data?: DescribeApplicationImageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is left empty if the request is successful.
   * 
   * - This parameter returns an error code if the request fails. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - **success** is returned if the request is successful.
   * 
   * - An error code is returned if the request fails.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
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

