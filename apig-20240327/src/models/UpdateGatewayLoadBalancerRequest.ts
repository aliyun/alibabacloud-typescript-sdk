// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayLoadBalancerRequestLoadBalancerDTOVirtualServiceList extends $dara.Model {
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * http
   */
  protocol?: string;
  /**
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
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
   * @example
   * lb-bp1xxxx
   */
  loadBalancerId?: string;
  /**
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @example
   * 0
   */
  serviceWeight?: number;
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
   * @example
   * 8080
   */
  port?: number;
  /**
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
  gatewayLoadBalancerPorts?: UpdateGatewayLoadBalancerRequestPortsGatewayLoadBalancerPorts[];
  /**
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
  loadBalancerDTO?: UpdateGatewayLoadBalancerRequestLoadBalancerDTO;
  /**
   * @example
   * Add
   */
  option?: string;
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

