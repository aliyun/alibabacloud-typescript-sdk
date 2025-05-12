// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFabricTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i-169263721924****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID List
   */
  lniIds?: string[];
  /**
   * @remarks
   * Node ID list
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-k8i0g9fk68t7u0u2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * @example
   * vpd-aof7****
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      lniIds: 'LniIds',
      nodeIds: 'NodeIds',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      lniIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lniIds)) {
      $dara.Model.validateArray(this.lniIds);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

