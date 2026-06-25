// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of instances of the service.
   * 
   * @example
   * 1
   */
  instanceCount?: string;
  /**
   * @remarks
   * The ID of the namespace that contains the app.
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
   * Test namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The type of the service registry. Valid values:
   * 
   * - **0**: SAE Nacos
   * 
   * - **1**: self-managed registry
   * 
   * - **2**: MSE Nacos
   * 
   * - **9**: SAE K8s Service
   * 
   * @example
   * 0
   */
  registryType?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The service group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  serviceGroup?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * frontend
   */
  serviceName?: string;
  /**
   * @remarks
   * A map of ports and protocols.
   */
  servicePortAndProtocol?: { [key: string]: string };
  /**
   * @remarks
   * A list of ports.
   */
  servicePorts?: number[];
  /**
   * @remarks
   * The protocol used by the service.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - **dubbo**
   * 
   * - **springCloud**
   * 
   * - **hsf**
   * 
   * - **k8sService**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The version of the service.
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
   * The HTTP status code or a POP error code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: The request is invalid.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of services.
   */
  data?: ListAppServicesResponseBodyData[];
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section.
   * 
   * - Successful requests do not return the **ErrorCode** field.
   * 
   * - Failed requests return the **ErrorCode** field. For more information, see the **error code** list in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error message is returned.
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
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query the details of a call.
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

