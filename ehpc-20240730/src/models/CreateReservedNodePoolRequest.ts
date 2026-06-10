// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReservedNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of reserved nodes.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The description of the reserved node pool.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The suffix of the hostnames for the reserved nodes.
   * 
   * @example
   * ed
   */
  hostPostfix?: string;
  /**
   * @remarks
   * The prefix of the hostnames for the reserved nodes.
   * 
   * @example
   * cloud
   */
  hostPrefix?: string;
  /**
   * @remarks
   * The name of the reserved node pool.
   * 
   * @example
   * nodepool
   */
  name?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      count: 'Count',
      description: 'Description',
      hostPostfix: 'HostPostfix',
      hostPrefix: 'HostPrefix',
      name: 'Name',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      count: 'number',
      description: 'string',
      hostPostfix: 'string',
      hostPrefix: 'string',
      name: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

