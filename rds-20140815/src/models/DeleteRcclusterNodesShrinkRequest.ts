// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCClusterNodesShrinkRequest extends $dara.Model {
  instanceIdsShrink?: string;
  nodesShrink?: string;
  regionId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      nodesShrink: 'Nodes',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      nodesShrink: 'string',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

