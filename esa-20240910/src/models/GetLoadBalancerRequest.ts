// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer. This ID is returned when the load balancer is created. You can also call [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) to get the IDs of all load balancers in a site.
   * 
   * This parameter is required.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * The ID of the site. Call [ListSites](~~ListSites~~) to get this ID.
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

