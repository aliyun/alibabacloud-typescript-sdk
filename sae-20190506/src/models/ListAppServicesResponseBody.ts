// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances of the microservice.
   * 
   * @example
   * 1
   */
  instanceCount?: string;
  /**
   * @remarks
   * The ID of the namespace to which the application belongs.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   */
  namespaceName?: string;
  /**
   * @remarks
   * The registry type. Valid values:
   * 
   * *   **0**：SAE Nacos
   * *   **1**: SAE built-in Nacos
   * *   **2**: MSE Nacos
   * *   **9**: SAE Kubernets service
   * 
   * @example
   * 0
   */
  registryType?: string;
  /**
   * @remarks
   * The IDs of the security groups.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The group to which the microservice belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  serviceGroup?: string;
  /**
   * @remarks
   * The name of the microservice.
   * 
   * @example
   * frontend
   */
  serviceName?: string;
  /**
   * @remarks
   * The ports and protocols.
   */
  servicePortAndProtocol?: { [key: string]: string };
  /**
   * @remarks
   * The list of ports.
   */
  servicePorts?: number[];
  /**
   * @remarks
   * The protocol used by the microservice.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The type of the microservice. Valid values:
   * 
   * *   **dubbo**
   * *   **springCloud**
   * *   **hsf**
   * *   **k8sService**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The version of the microservice.
   * 
   * @example
   * 1.0.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      instanceCount: 'InstanceCount',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      registryType: 'RegistryType',
      securityGroupId: 'SecurityGroupId',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      servicePortAndProtocol: 'ServicePortAndProtocol',
      servicePorts: 'ServicePorts',
      serviceProtocol: 'ServiceProtocol',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      instanceCount: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      registryType: 'string',
      securityGroupId: 'string',
      serviceGroup: 'string',
      serviceName: 'string',
      servicePortAndProtocol: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      servicePorts: { 'type': 'array', 'itemType': 'number' },
      serviceProtocol: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(this.servicePortAndProtocol) {
      $dara.Model.validateMap(this.servicePortAndProtocol);
    }
    if(Array.isArray(this.servicePorts)) {
      $dara.Model.validateArray(this.servicePorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the microservice.
   */
  data?: ListAppServicesResponseBodyData[];
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   If the request was successful, the **ErrorCode** parameter is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   If the request was successful, **success** is returned.
   * *   If the request failed, an error message is returned.
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
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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
      data: { 'type': 'array', 'itemType': ListAppServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

