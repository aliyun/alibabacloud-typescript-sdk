// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigMapResponseBodyDataRelateApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * f16b4000-9058-4c22-a49d-49a28f0b****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The time when the ConfigMap was created.
   * 
   * @example
   * 1593746835111
   */
  createTime?: number;
  /**
   * @remarks
   * The key-value pairs of the ConfigMap. Format:
   * 
   * {"k1":"v1", "k2":"v2"}
   * 
   * k specifies a key and v specifies a value. For more information, see [Manage a Kubernetes ConfigMap](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description of the ConfigMap.
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the ConfigMap.
   * 
   * @example
   * test-configmap
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The application that is associated with the ConfigMap.
   */
  relateApps?: DescribeConfigMapResponseBodyDataRelateApps[];
  /**
   * @remarks
   * The time when the ConfigMap was updated.
   * 
   * @example
   * 1593747274195
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': DescribeConfigMapResponseBodyDataRelateApps },
      updateTime: 'number',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(Array.isArray(this.relateApps)) {
      $dara.Model.validateArray(this.relateApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBody extends $dara.Model {
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
   * The returned result.
   */
  data?: DescribeConfigMapResponseBodyData;
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
   * Indicates whether the details of the ConfigMap were queried. Valid values:
   * 
   * *   **true**: The details were queried.
   * *   **false**: The details failed to be queried.
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
      data: DescribeConfigMapResponseBodyData,
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

