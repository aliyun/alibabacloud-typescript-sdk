// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerOriginStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  loadBalancerIds?: string;
  poolType?: string;
  /**
   * @remarks
   * This parameter is required.
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

