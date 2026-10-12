// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayLoadBalancerResponseBodyDataVirtualServiceList extends $dara.Model {
  /**
   * @remarks
   * The port. When an NLB instance is associated, two placeholder entries with ports 80 and 443 are returned.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The protocol. When an NLB instance is associated, HTTP and HTTPS are returned as placeholders. For CLB, the value is deserialized from the stored vServerGroupMetaInfo.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The VServerGroup or ServerGroup ID. When an NLB instance is associated, this field is an empty string placeholder.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The group name. When an NLB instance is associated, this field is an empty string placeholder.
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
      port: 'string',
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

export class UpdateGatewayLoadBalancerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the load balancer can be edited. This serves as the edit toggle for a load balancer that is being migrated.
   * 
   * @example
   * true
   */
  editEnable?: boolean;
  /**
   * @remarks
   * The load balancer address.
   * 
   * @example
   * 47.x.x.x
   */
  loadBalancerAddress?: string;
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
   * The load balancer name.
   * 
   * @example
   * my-clb
   */
  loadBalancerName?: string;
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
   * The port information.
   */
  ports?: number[];
  /**
   * @remarks
   * The gateway service weight for traffic shifting during migration. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  serviceWeight?: number;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Status description
   */
  statusDescription?: string;
  /**
   * @remarks
   * The backend server group bindings.
   */
  virtualServiceList?: UpdateGatewayLoadBalancerResponseBodyDataVirtualServiceList[];
  static names(): { [key: string]: string } {
    return {
      editEnable: 'editEnable',
      loadBalancerAddress: 'loadBalancerAddress',
      loadBalancerId: 'loadBalancerId',
      loadBalancerName: 'loadBalancerName',
      loadBalancerType: 'loadBalancerType',
      networkType: 'networkType',
      ports: 'ports',
      serviceWeight: 'serviceWeight',
      statusDescription: 'statusDescription',
      virtualServiceList: 'virtualServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editEnable: 'boolean',
      loadBalancerAddress: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerType: 'string',
      networkType: 'string',
      ports: { 'type': 'array', 'itemType': 'number' },
      serviceWeight: 'number',
      statusDescription: 'string',
      virtualServiceList: { 'type': 'array', 'itemType': UpdateGatewayLoadBalancerResponseBodyDataVirtualServiceList },
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.virtualServiceList)) {
      $dara.Model.validateArray(this.virtualServiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: UpdateGatewayLoadBalancerResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CEB8F71F-F889-599E-9D03-250978412350
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateGatewayLoadBalancerResponseBodyData,
      message: 'string',
      requestId: 'string',
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

