// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sServicesResponseBodyServicesServicePorts extends $dara.Model {
  /**
   * @remarks
   * The port of the node.
   * 
   * @example
   * 0
   */
  nodePort?: number;
  /**
   * @remarks
   * The frontend service port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the service.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The backend container port.
   * 
   * @example
   * 8080
   */
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The IP address of the service in the Kubernetes cluster.
   * 
   * @example
   * 104.23.xx.xx
   */
  clusterIP?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * service-http
   */
  name?: string;
  /**
   * @remarks
   * The mapping of service ports.
   */
  servicePorts?: GetK8sServicesResponseBodyServicesServicePorts[];
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * ClusterIP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIP: 'ClusterIP',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIP: 'string',
      name: 'string',
      servicePorts: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServicesServicePorts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.servicePorts)) {
      $dara.Model.validateArray(this.servicePorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
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
   * 4823-bhjf-23u4-eiufh
   */
  requestId?: string;
  /**
   * @remarks
   * The list of services in the Kubernetes cluster.
   */
  services?: GetK8sServicesResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': GetK8sServicesResponseBodyServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

