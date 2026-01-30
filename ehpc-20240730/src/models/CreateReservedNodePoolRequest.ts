// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReservedNodePoolRequest extends $dara.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * ed
   */
  hostPostfix?: string;
  /**
   * @example
   * cloud
   */
  hostPrefix?: string;
  /**
   * @example
   * nodepool
   */
  name?: string;
  /**
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

