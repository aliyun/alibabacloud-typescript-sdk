// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for the private connection established based on the private network interconnection mode of Compute Nest.
   * 
   * @example
   * 1536Mbps
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * ie-569a9be34f5534f6bc6559b5c1xxxxxx.service-51f80502802e48xxxxxx.cn-hangzhou.computenest.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of the endpoints of the private connections.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The state of the ingress endpoint. Valid values:
   * 
   * *   Ready: The ingress endpoint is connected.
   * *   Pending: The ingress endpoint is being connected.
   * *   Failed: The ingress endpoint fails to be connected.
   * *   Deleted: The ingress endpoint is deleted.
   * *   Deleting: The ingress endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The state of the network service. Valid values:
   * 
   * *   Ready: The network service is connected.
   * *   Pending: The network service is being connected.
   * *   Failed: The network service fails to be connected.
   * *   Deleted: The network service is deleted.
   * *   Deleting: The network service is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the endpoint of the private connection established based on the private network interconnection mode of Compute Nest belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The names of the security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The names of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      regionId: 'RegionId',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      regionId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointIps)) {
      $dara.Model.validateArray(this.endpointIps);
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

