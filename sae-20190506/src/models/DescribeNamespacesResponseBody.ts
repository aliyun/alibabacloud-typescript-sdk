// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespacesResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The access key ID for Application Configuration Management (ACM), used to manage data in an ACM namespace. For more information, see [Differences between an Alibaba Cloud access key and an ACM-specific access key](https://help.aliyun.com/document_detail/68941.html).
   * 
   * @example
   * b34dbe3315c64f9f99b58ea447ec****
   */
  accessKey?: string;
  /**
   * @remarks
   * The service endpoint.
   * 
   * @example
   * addr-bj-internal.edas.aliyun.com
   */
  addressServerHost?: string;
  /**
   * @remarks
   * The short ID of the namespace.
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
   * The namespace ID. The default namespace cannot be queried, modified, or deleted.
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
   * The ID of the region. For example, \\"cn-beijing\\" indicates China (Beijing).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The secret access key for Application Configuration Management (ACM), used to manage data in an ACM namespace. For more information, see [Differences between an Alibaba Cloud access key and an ACM-specific access key](https://help.aliyun.com/document_detail/68941.html).
   * 
   * @example
   * G/w6sseK7+nb3S6HBmANDBMD****
   */
  secretKey?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 838cad95-973f-48fe-830b-2a8546d7****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      addressServerHost: 'AddressServerHost',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      addressServerHost: 'string',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      secretKey: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: DescribeNamespacesResponseBodyDataNamespaces[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of namespaces.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      namespaces: 'Namespaces',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyDataNamespaces },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the namespaces.
   */
  data?: DescribeNamespacesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned by the system.
   * 
   * - Returns **success** if the request is successful.
   * 
   * - Returns a specific error message if the request fails.
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
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that can be used to query the details of a call.
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
      data: DescribeNamespacesResponseBodyData,
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

