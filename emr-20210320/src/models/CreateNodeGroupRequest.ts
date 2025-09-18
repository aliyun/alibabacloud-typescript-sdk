// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeGroupConfig } from "./NodeGroupConfig";


export class CreateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C-E525E04F3914****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the node group.
   */
  nodeGroup?: NodeGroupConfig;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroup: 'NodeGroup',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroup: NodeGroupConfig,
      regionId: 'string',
    };
  }

  validate() {
    if(this.nodeGroup && typeof (this.nodeGroup as any).validate === 'function') {
      (this.nodeGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

