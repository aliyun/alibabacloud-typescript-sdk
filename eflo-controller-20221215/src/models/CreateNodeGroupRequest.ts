// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNodeGroupRequestNodeGroup } from "./CreateNodeGroupRequestNodeGroup";


export class CreateNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i118191731740041623425
   */
  clusterId?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * This parameter is required.
   */
  nodeGroup?: CreateNodeGroupRequestNodeGroup;
  /**
   * @remarks
   * Node information
   */
  nodeUnit?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroup: 'NodeGroup',
      nodeUnit: 'NodeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroup: CreateNodeGroupRequestNodeGroup,
      nodeUnit: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.nodeGroup && typeof (this.nodeGroup as any).validate === 'function') {
      (this.nodeGroup as any).validate();
    }
    if(this.nodeUnit) {
      $dara.Model.validateMap(this.nodeUnit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

