// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesToNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The array of instances, including the instance information.
   * 
   * This parameter is required.
   */
  instances?: string[];
  /**
   * @remarks
   * The node pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np68mi5y1dd748ky37ojo2kqdrz
   */
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instances: 'Instances',
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      nodepoolId: 'string',
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

