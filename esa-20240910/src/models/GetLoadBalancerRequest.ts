// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The load balancer ID, which uniquely identifies the load balancer to query. This ID is returned when the load balancer is created. You can also call the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) operation to obtain all load balancers under a site.
   * 
   * This parameter is required.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1159101787****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

