// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportedServicesDetailResponseBodyDetailsPorts extends $dara.Model {
  /**
   * @remarks
   * The name of a port.
   * 
   * @example
   * http-0
   */
  name?: string;
  /**
   * @remarks
   * The node port.
   * 
   * @example
   * 12345
   */
  nodePort?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The container port.
   * 
   * @example
   * 8080
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nodePort: 'NodePort',
      port: 'Port',
      protocol: 'Protocol',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nodePort: 'number',
      port: 'number',
      protocol: 'string',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The clusters on the data plane.
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The labels of the service.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The namespace in which the service resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ports declared for the service.
   */
  ports?: DescribeImportedServicesDetailResponseBodyDetailsPorts[];
  /**
   * @remarks
   * The name of a service.
   * 
   * @example
   * productpage
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * Kubernetes
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      labels: 'Labels',
      namespace: 'Namespace',
      ports: 'Ports',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': DescribeImportedServicesDetailResponseBodyDetailsPorts },
      serviceName: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImportedServicesDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the services.
   */
  details?: DescribeImportedServicesDetailResponseBodyDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0496204-7586-5B4C-B364-2361CC0EDxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeImportedServicesDetailResponseBodyDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

