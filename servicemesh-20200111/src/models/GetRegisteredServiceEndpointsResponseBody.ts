// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails extends $dara.Model {
  /**
   * @remarks
   * The port of the registered service.
   * 
   * @example
   * ``127.2.**.**``
   */
  address?: string;
  /**
   * @remarks
   * The ID of the region in which the registered service resides.
   * 
   * @example
   * www.demo.com
   */
  hostname?: string;
  /**
   * @remarks
   * The IP address of the registered service.
   * 
   * @example
   * provider-v1-8c86b6898-h***
   */
  podName?: string;
  /**
   * @remarks
   * The host name of the registered service.
   */
  ports?: number[];
  /**
   * @remarks
   * Indicates whether sidecar proxies are injected. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * false
   */
  sidecarInjected?: boolean;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      hostname: 'Hostname',
      podName: 'PodName',
      ports: 'Ports',
      region: 'Region',
      sidecarInjected: 'SidecarInjected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hostname: 'string',
      podName: 'string',
      ports: { 'type': 'array', 'itemType': 'number' },
      region: 'string',
      sidecarInjected: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBodyEndPointSlice extends $dara.Model {
  /**
   * @remarks
   * The name of the pod.
   */
  endpointsDetails?: GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails[];
  /**
   * @remarks
   * The details of the endpoint of the registered service.
   * 
   * @example
   * MESH_INTERNAL
   */
  location?: string;
  /**
   * @remarks
   * The location of the registered service. Valid values:
   * 
   * *   `MESH_INTERNAL`: The service is deployed inside the ASM instance.
   * *   `MESH_EXTERNAL`: The service is deployed outside the ASM instance.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * reviews
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointsDetails: 'EndpointsDetails',
      location: 'Location',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointsDetails: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseBodyEndPointSliceEndpointsDetails },
      location: 'string',
      namespace: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointsDetails)) {
      $dara.Model.validateArray(this.endpointsDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBodyServiceEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * @example
   * 192.168.25.153
   */
  address?: string;
  /**
   * @remarks
   * The details of the endpoints of the registered service.
   * 
   * @example
   * c80f45444b3da447da60a911390c2****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisteredServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the registered service.
   */
  endPointSlice?: GetRegisteredServiceEndpointsResponseBodyEndPointSlice;
  /**
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address of the registered service.
   */
  serviceEndpoints?: GetRegisteredServiceEndpointsResponseBodyServiceEndpoints[];
  static names(): { [key: string]: string } {
    return {
      endPointSlice: 'EndPointSlice',
      requestId: 'RequestId',
      serviceEndpoints: 'ServiceEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPointSlice: GetRegisteredServiceEndpointsResponseBodyEndPointSlice,
      requestId: 'string',
      serviceEndpoints: { 'type': 'array', 'itemType': GetRegisteredServiceEndpointsResponseBodyServiceEndpoints },
    };
  }

  validate() {
    if(this.endPointSlice && typeof (this.endPointSlice as any).validate === 'function') {
      (this.endPointSlice as any).validate();
    }
    if(Array.isArray(this.serviceEndpoints)) {
      $dara.Model.validateArray(this.serviceEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

