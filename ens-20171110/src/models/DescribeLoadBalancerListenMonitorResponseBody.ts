// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData extends $dara.Model {
  /**
   * @remarks
   * The number of active connections.
   * 
   * @example
   * 80285
   */
  actConns?: string;
  /**
   * @remarks
   * The business time.
   * 
   * @example
   * 2024-01-15 16:03:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 37150
   */
  conns?: string;
  /**
   * @remarks
   * The number of dropped connections.
   * 
   * @example
   * 10
   */
  dropConns?: string;
  /**
   * @remarks
   * The ID of the node to which the ELB instance belongs.
   * 
   * @example
   * cn-dongguan-9
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The number of inactive connections.
   * 
   * @example
   * 16322
   */
  inActConns?: string;
  /**
   * @remarks
   * The inbound traffic.
   * 
   * @example
   * 67532
   */
  inBytes?: string;
  /**
   * @remarks
   * The dropped inbound traffic.
   * 
   * @example
   * 324
   */
  inDropBytes?: string;
  /**
   * @remarks
   * The number of dropped inbound packets.
   * 
   * @example
   * 27
   */
  inDropPkts?: string;
  /**
   * @remarks
   * The number of inbound packets.
   * 
   * @example
   * 12
   */
  inPkts?: string;
  /**
   * @remarks
   * The number of unavailable servers that are attached to the monitored ELB instance.
   * 
   * @example
   * 0
   */
  inValidRsNum?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5q73cv04zeyh43lh74lp4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The outbound traffic.
   * 
   * @example
   * 5155487
   */
  outBytes?: string;
  /**
   * @remarks
   * The dropped outbound traffic.
   * 
   * @example
   * 0
   */
  outDropBytes?: string;
  /**
   * @remarks
   * The number of dropped outbound packets.
   * 
   * @example
   * 76
   */
  outDropPkts?: string;
  /**
   * @remarks
   * The number of outbound packets.
   * 
   * @example
   * 34
   */
  outPkts?: string;
  /**
   * @remarks
   * The network protocol.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The VIP port of the ELB instance.
   * 
   * @example
   * 80
   */
  VPort?: string;
  /**
   * @remarks
   * The number of available servers that are attached to the monitored ELB instance.
   * 
   * @example
   * 2
   */
  validRsNum?: string;
  /**
   * @remarks
   * The virtual IP address (VIP) of the instance.
   * 
   * @example
   * 10.8.*.*
   */
  vip?: string;
  /**
   * @remarks
   * The ID of the tunnel.
   * 
   * @example
   * 53284
   */
  vni?: string;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      bizTime: 'BizTime',
      conns: 'Conns',
      dropConns: 'DropConns',
      ensRegionId: 'EnsRegionId',
      inActConns: 'InActConns',
      inBytes: 'InBytes',
      inDropBytes: 'InDropBytes',
      inDropPkts: 'InDropPkts',
      inPkts: 'InPkts',
      inValidRsNum: 'InValidRsNum',
      loadBalancerId: 'LoadBalancerId',
      outBytes: 'OutBytes',
      outDropBytes: 'OutDropBytes',
      outDropPkts: 'OutDropPkts',
      outPkts: 'OutPkts',
      proto: 'Proto',
      VPort: 'VPort',
      validRsNum: 'ValidRsNum',
      vip: 'Vip',
      vni: 'Vni',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'string',
      bizTime: 'string',
      conns: 'string',
      dropConns: 'string',
      ensRegionId: 'string',
      inActConns: 'string',
      inBytes: 'string',
      inDropBytes: 'string',
      inDropPkts: 'string',
      inPkts: 'string',
      inValidRsNum: 'string',
      loadBalancerId: 'string',
      outBytes: 'string',
      outDropBytes: 'string',
      outDropPkts: 'string',
      outPkts: 'string',
      proto: 'string',
      VPort: 'string',
      validRsNum: 'string',
      vip: 'string',
      vni: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerListenMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The TCP/UDP monitoring data of the ELB instance.
   */
  loadBalancerMonitorListenData?: DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData[];
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerMonitorListenData: 'LoadBalancerMonitorListenData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerMonitorListenData: { 'type': 'array', 'itemType': DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerMonitorListenData)) {
      $dara.Model.validateArray(this.loadBalancerMonitorListenData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

