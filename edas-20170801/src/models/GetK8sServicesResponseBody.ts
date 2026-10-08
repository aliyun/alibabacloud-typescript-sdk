// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sServicesResponseBodyServicesServicePorts extends $dara.Model {
  /**
   * @remarks
   * The node port.
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
   * The service protocol.
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
   * The IP address of the Kubernetes Service.
   * 
   * @example
   * 104.23.xx.xx
   */
  clusterIP?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service-http
   */
  name?: string;
  /**
   * @remarks
   * The list of port mappings.
   */
  servicePorts?: GetK8sServicesResponseBodyServicesServicePorts[];
  /**
   * @remarks
   * The service type.
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information.
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
   * 4823-bhjf-23u4-eiufh
   */
  requestId?: string;
  /**
   * @remarks
   * The list of Kubernetes Services.
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

