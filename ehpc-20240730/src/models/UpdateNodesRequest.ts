// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateNodesRequestInstances } from "./UpdateNodesRequestInstances";


export class UpdateNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instances?: UpdateNodesRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instances: { 'type': 'array', 'itemType': UpdateNodesRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

