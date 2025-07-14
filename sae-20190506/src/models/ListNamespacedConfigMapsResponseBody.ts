// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps extends $dara.Model {
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
   * The time when the instance was created.
   * 
   * @example
   * 1593760185111
   */
  createTime?: number;
  /**
   * @remarks
   * The data of ConfigMap key-value pairs. Format:
   * 
   * {"k1":"v1", "k2":"v2"}
   * 
   * k specifies a key and v specifies a value. For more information, see [Manage and use configurations](https://help.aliyun.com/document_detail/171326.html).
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
   * The name of the ConfigMap instance.
   * 
   * @example
   * test-name
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
   * The application that is associated with the instance.
   */
  relateApps?: ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps[];
  /**
   * @remarks
   * The time when the instance was last modified.
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
   * The ConfigMap instances.
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
   * *   **2xx**: indicates that the call was successful.
   * *   **3xx**: indicates that the call was redirected.
   * *   **4xx**: indicates that the call failed.
   * *   **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListNamespacedConfigMapsResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * - If the call is successful, the **ErrorCode** parameter is not returned.
   * - If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned information. Valid values:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the ConfigMap instances were obtained. Valid values:
   * 
   * *   **true**: The instances were obtained.
   * *   **false**: The instances failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

