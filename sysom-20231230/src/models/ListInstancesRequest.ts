// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * xxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      current: 'number',
      instance: 'string',
      pageSize: 'number',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

