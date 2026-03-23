// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCClusterNodesRequest extends $dara.Model {
  instanceIds?: string[];
  nodes?: string[];
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      nodes: 'Nodes',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      nodes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

