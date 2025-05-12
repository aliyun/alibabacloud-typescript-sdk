// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPodsOfInstanceRequest extends $dara.Model {
  /**
   * @example
   * c96e34d74eb6748f3b2a46552d5d653f6
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      current: 'number',
      instance: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

