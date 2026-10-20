// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the node pool.
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
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodepoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

