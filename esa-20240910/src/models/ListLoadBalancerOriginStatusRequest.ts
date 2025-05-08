// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerOriginStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Load balancer ID. When querying multiple load balancers, separate the IDs with commas. A maximum of 100 load balancer IDs can be passed at once. Load balancer IDs can be obtained by calling the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 99874066052****,100892832360****
   */
  loadBalancerIds?: string;
  /**
   * @remarks
   * Source address pool type. Various source address pools are configured under the load balancer, including default pools, fallback pools, and primary region pools. Only the status of origins in the default pool affects the status of the load balancer itself. Passing `default_pool` means only querying the status of origins in the default source address pool under the load balancer.
   * 
   * @example
   * default_pool
   */
  poolType?: string;
  /**
   * @remarks
   * Site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1159101787****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerIds: 'LoadBalancerIds',
      poolType: 'PoolType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerIds: 'string',
      poolType: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

