// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyResultSpecQrsResource extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values: local_ssd, SSD, and cloud.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  disk?: number;
  /**
   * @remarks
   * The memory of the instance. Unit: GB.
   * 
   * @example
   * 10
   */
  mem?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      cpu: 'cpu',
      disk: 'disk',
      mem: 'mem',
      nodeCount: 'nodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpu: 'number',
      disk: 'number',
      mem: 'number',
      nodeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

