// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayLoadBalancerResponseBodyDataVirtualServiceList extends $dara.Model {
  /**
   * @example
   * 80
   */
  port?: string;
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
   * @example
   * true
   */
  editEnable?: boolean;
  /**
   * @example
   * 47.x.x.x
   */
  loadBalancerAddress?: string;
  /**
   * @example
   * lb-bp1xxxx
   */
  loadBalancerId?: string;
  /**
   * @example
   * my-clb
   */
  loadBalancerName?: string;
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
  ports?: number[];
  /**
   * @example
   * 0
   */
  serviceWeight?: number;
  /**
   * @example
   * 状态描述
   */
  statusDescription?: string;
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
   * @example
   * 200
   */
  code?: string;
  data?: UpdateGatewayLoadBalancerResponseBodyData;
  /**
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

