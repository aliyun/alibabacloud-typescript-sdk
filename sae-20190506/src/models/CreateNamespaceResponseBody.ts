// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SAE built-in registry is enabled:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableMicroRegistration?: boolean;
  /**
   * @remarks
   * Indicates whether the namespace was created. Valid values:
   * 
   * *   **true**: The instance was created.
   * *   **false**: The call failed to be created.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The short ID of the namespace.
   * 
   * @example
   * desc
   */
  namespaceDescription?: string;
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   The **ErrorCode** parameter is not returned if the request succeeds.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * Null
   * 
   * @example
   * name
   */
  namespaceName?: string;
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
   * bucketPath
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about a namespace.
   */
  data?: CreateNamespaceResponseBodyData;
  /**
   * @remarks
   * http://sae_pop_pre/#vpc
   * 
   * @example
   * bucketName
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The description of the custom namespace.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * mountDir
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the namespace.
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

