// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigMapResponseBodyDataRelateApps extends $dara.Model {
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

export class DescribeConfigMapResponseBodyData extends $dara.Model {
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
   * 1593746835111
   */
  createTime?: number;
  /**
   * @remarks
   * The key-value pairs of the ConfigMap. The data is in the following format:
   * 
   * {"k1":"v1", "k2":"v2"}
   * 
   * For more information about configuration items, see [Manage and use configuration items](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description of the ConfigMap instance.
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
   * test-configmap
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
  relateApps?: DescribeConfigMapResponseBodyDataRelateApps[];
  /**
   * @remarks
   * The time when the instance was last updated.
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
   * - **2xx**: success
   * 
   * - **3xx**: redirection
   * 
   * - **4xx**: client error
   * 
   * - **5xx**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeConfigMapResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * - This parameter is empty if the request succeeds.
   * 
   * - This parameter contains an error code if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - The value is **success** if the request succeeds.
   * 
   * - The value is an error code if the request fails.
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
   * The trace ID. You can use it to locate the call details.
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

