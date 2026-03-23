// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolRequest extends $dara.Model {
  clusterId?: string;
  nodePoolId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodePoolId: 'NodePoolId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodePoolId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

