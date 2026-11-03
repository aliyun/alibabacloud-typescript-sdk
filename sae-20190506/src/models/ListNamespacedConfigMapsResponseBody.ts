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
   * The ConfigMap instance ID.
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
   * The key-value pair data of the ConfigMap instance. The format is as follows:
   * 
   * {"k1":"v1", "k2":"v2"}
   * 
   * k indicates the key, and v indicates the value. For more information about configuration items, see [Manage and use configuration items](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The ConfigMap instance name.
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
   * The update time.
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
   * The returned results.
   */
  data?: ListNamespacedConfigMapsResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.NotEmpty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is successful.
   * - Specific error code: An exception occurred during the request.
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
   * Indicates whether the list of ConfigMap instances is successfully retrieved. Valid values:
   * 
   * - **true**: The list is successfully retrieved.
   * - **false**: The list fails to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query call details.
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

