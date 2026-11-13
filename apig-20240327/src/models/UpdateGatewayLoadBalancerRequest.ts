// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayLoadBalancerRequestLoadBalancerDTOVirtualServiceList extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535. If the value is invalid, an error is reported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol. This parameter is required for CLB. If this parameter is missing for CLB, a "protocol is missing for CLB" error is reported. No backend enum validation is performed. Valid values: tcp, udp, http, https, and tls.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The CLB VServerGroupId or NLB ServerGroupId. This parameter is required. If the same group ID is duplicated, a group conflict error is reported.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The group name. This parameter is required. If this parameter is missing, a "virtual service parameter is missing" error is reported.
   * 
   * @example
   * 80-tcp
   */
  virtualServiceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      virtualServiceGroupId: 'virtualServiceGroupId',
      virtualServiceGroupName: 'virtualServiceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      virtualServiceGroupId: 'string',
      virtualServiceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayLoadBalancerRequestLoadBalancerDTO extends $dara.Model {
  /**
   * @remarks
   * The load balancer instance ID.
   * 
   * @example
   * lb-bp1xxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The load balancer type.
   * 
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The service weight. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  serviceWeight?: number;
  /**
   * @remarks
   * The list of backend server group bindings.
   */
  virtualServiceList?: UpdateGatewayLoadBalancerRequestLoadBalancerDTOVirtualServiceList[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'loadBalancerId',
      loadBalancerType: 'loadBalancerType',
      networkType: 'networkType',
      serviceWeight: 'serviceWeight',
      virtualServiceList: 'virtualServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerType: 'string',
      networkType: 'string',
      serviceWeight: 'number',
      virtualServiceList: { 'type': 'array', 'itemType': UpdateGatewayLoadBalancerRequestLoadBalancerDTOVirtualServiceList },
    };
  }

  validate() {
    if(Array.isArray(this.virtualServiceList)) {
      $dara.Model.validateArray(this.virtualServiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayLoadBalancerRequestPortsGatewayLoadBalancerPorts extends $dara.Model {
  /**
   * @remarks
   * The listener port. Valid values: 0 to 65535. A maximum of 50 custom ports can be configured on the frontend.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayLoadBalancerRequestPorts extends $dara.Model {
  /**
   * @remarks
   * The listener ports.
   */
  gatewayLoadBalancerPorts?: UpdateGatewayLoadBalancerRequestPortsGatewayLoadBalancerPorts[];
  /**
   * @remarks
   * The load balancer type.
   * 
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayLoadBalancerPorts: 'gatewayLoadBalancerPorts',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayLoadBalancerPorts: { 'type': 'array', 'itemType': UpdateGatewayLoadBalancerRequestPortsGatewayLoadBalancerPorts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayLoadBalancerPorts)) {
      $dara.Model.validateArray(this.gatewayLoadBalancerPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The load balancer operation DTO.
   */
  loadBalancerDTO?: UpdateGatewayLoadBalancerRequestLoadBalancerDTO;
  /**
   * @remarks
   * The operation type. If this parameter is empty or not specified, only the ports are updated based on the ports parameter.
   * 
   * @example
   * Add
   */
  option?: string;
  /**
   * @remarks
   * The list of ports.
   */
  ports?: UpdateGatewayLoadBalancerRequestPorts[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerDTO: 'loadBalancerDTO',
      option: 'option',
      ports: 'ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerDTO: UpdateGatewayLoadBalancerRequestLoadBalancerDTO,
      option: 'string',
      ports: { 'type': 'array', 'itemType': UpdateGatewayLoadBalancerRequestPorts },
    };
  }

  validate() {
    if(this.loadBalancerDTO && typeof (this.loadBalancerDTO as any).validate === 'function') {
      (this.loadBalancerDTO as any).validate();
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

