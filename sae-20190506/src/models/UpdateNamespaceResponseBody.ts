// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the built-in registry of SAE is enabled. Valid values:
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  enableMicroRegistration?: boolean;
  /**
   * @remarks
   * The short namespace ID.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The namespace description.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * name
   */
  namespaceName?: string;
  /**
   * @remarks
   * The region where the namespace is located.
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

export class UpdateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The namespace information.
   */
  data?: UpdateNamespaceResponseBodyData;
  /**
   * @remarks
   * The error code. The following rules apply:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidNamespaceName.Format
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the request result.
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
   * Indicates whether the namespace information is updated. Valid values:
   * 
   * - **true**: The update is successful.
   * - **false**: The update fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to precisely query invocation information.
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
      data: UpdateNamespaceResponseBodyData,
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

