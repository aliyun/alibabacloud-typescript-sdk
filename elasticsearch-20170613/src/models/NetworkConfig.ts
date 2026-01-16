// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WhiteIpGroup } from "./WhiteIpGroup";


export class NetworkConfigLoadBalanceConfig extends $dara.Model {
  vsArea?: string;
  /**
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
   * @example
   * DEFAULT
   */
  loadBalanceType?: string;
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
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

