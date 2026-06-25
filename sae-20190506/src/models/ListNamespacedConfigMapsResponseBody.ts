// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * f16b4000-9058-4c22-a49d-49a28f0b****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
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

export class ListNamespacedConfigMapsResponseBodyDataConfigMaps extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap instance.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1593760185111
   */
  createTime?: number;
  /**
   * @remarks
   * The key-value pairs of the ConfigMap instance.
   * 
   * For more information about the ConfigMap, see [Manage and use configuration items](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-name
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The associated applications.
   */
  relateApps?: ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps[];
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 1593760185111
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
      relateApps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps },
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

export class ListNamespacedConfigMapsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of ConfigMap instances.
   */
  configMaps?: ListNamespacedConfigMapsResponseBodyDataConfigMaps[];
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMaps },
    };
  }

  validate() {
    if(Array.isArray(this.configMaps)) {
      $dara.Model.validateArray(this.configMaps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the request.
   */
  data?: ListNamespacedConfigMapsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * -
   * 
   * - This parameter is returned only if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message. Valid values:
   * 
   * - Returns **success** if the request is successful.
   * 
   * - Returns an error message if the request fails.
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
   * The trace ID. You can use this ID to trace the request.
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
      data: ListNamespacedConfigMapsResponseBodyData,
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

