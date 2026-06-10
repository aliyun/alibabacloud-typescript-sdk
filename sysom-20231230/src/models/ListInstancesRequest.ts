// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * xxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This field exists when paging is used and indicates the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Filter by ECS instance ID
   * 
   * @example
   * i-8vbfd3g9vs32sfuvv38h
   */
  instance?: string;
  /**
   * @remarks
   * Page size. Default value is 20. Valid range: [1, 100].
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter instances by area
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filter instances by status
   * 
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

