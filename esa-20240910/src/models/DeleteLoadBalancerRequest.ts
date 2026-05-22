// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer, used to uniquely identify the load balancer to be queried. This ID is returned directly upon creation of the load balancer and can also be obtained through the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) interface for querying all load balancers under a site.
   * 
   * This parameter is required.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * The ID of the site, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
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

