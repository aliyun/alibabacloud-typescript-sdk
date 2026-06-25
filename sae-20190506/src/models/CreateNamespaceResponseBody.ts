// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the built-in service registry of SAE is enabled.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  enableMicroRegistration?: boolean;
  /**
   * @remarks
   * The short-format namespace ID.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * name
   */
  namespaceName?: string;
  /**
   * @remarks
   * The region where the namespace resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the namespace.
   */
  data?: CreateNamespaceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, this parameter is not returned.
   * 
   * - If the request fails, this parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information returned.
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
   * Indicates whether the namespace was successfully created. Valid values:
   * 
   * - **true**: The namespace was created.
   * 
   * - **false**: The namespace failed to be created.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use the trace ID to query the details of a request.
   * 
   * @example
   * 0a981dd515966966104121683d****
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
      data: CreateNamespaceResponseBodyData,
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

