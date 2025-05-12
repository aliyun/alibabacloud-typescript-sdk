// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFabricTopologyResponseBodyContentTopoInfo } from "./GetFabricTopologyResponseBodyContentTopoInfo";


export class GetFabricTopologyResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * network interface controller Topology Information
   */
  topoInfo?: GetFabricTopologyResponseBodyContentTopoInfo[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * @example
   * vpd-fuli****
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      topoInfo: 'TopoInfo',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      topoInfo: { 'type': 'array', 'itemType': GetFabricTopologyResponseBodyContentTopoInfo },
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topoInfo)) {
      $dara.Model.validateArray(this.topoInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

