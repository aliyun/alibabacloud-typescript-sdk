// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WhiteIpGroup } from "./WhiteIpGroup";


export class NetworkConfigLoadBalanceConfig extends $dara.Model {
  /**
   * @remarks
   * 可用区信息，如: cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * vswitchId
   * 
   * @example
   * vsw-xxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NetworkConfig extends $dara.Model {
  lbReplica?: number;
  loadBalanceConfig?: NetworkConfigLoadBalanceConfig[];
  /**
   * @remarks
   * The load balancing type. Default value: DEFAULT.
   * 
   * @example
   * DEFAULT
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The network type. Only Virtual Private Cloud (VPC) is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1xk0naij7jx4ph1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the network.
   * 
   * @example
   * cn-hangzhou-e
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1ogpdintii5qvyx****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The IP whitelist group configuration. You do not need to set this parameter when you call the createInstance operation to create an instance because the setting does not take effect during instance creation. Use a separate API operation to configure whitelists for different roles.
   */
  whiteIpGroupList?: WhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      lbReplica: 'lbReplica',
      loadBalanceConfig: 'loadBalanceConfig',
      loadBalanceType: 'loadBalanceType',
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbReplica: 'number',
      loadBalanceConfig: { 'type': 'array', 'itemType': NetworkConfigLoadBalanceConfig },
      loadBalanceType: 'string',
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': WhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalanceConfig)) {
      $dara.Model.validateArray(this.loadBalanceConfig);
    }
    if(Array.isArray(this.whiteIpGroupList)) {
      $dara.Model.validateArray(this.whiteIpGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

