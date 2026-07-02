// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * xxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The current page number. This field exists when pagination is used.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The ECS instance ID used to filter results.
   * 
   * @example
   * i-8vbfd3g9vs32sfuvv38h
   */
  instance?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters instances by region.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * Filters instances by status.
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

