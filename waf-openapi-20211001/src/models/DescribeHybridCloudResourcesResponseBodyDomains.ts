// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudResourcesResponseBodyDomainsListen } from "./DescribeHybridCloudResourcesResponseBodyDomainsListen";
import { DescribeHybridCloudResourcesResponseBodyDomainsRedirect } from "./DescribeHybridCloudResourcesResponseBodyDomainsRedirect";


export class DescribeHybridCloudResourcesResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The CNAME assigned by WAF.
   * 
   * >  This parameter is returned only if the value of **CnameEnabled** is true.
   * 
   * @example
   * 50fqmu1ci7g0xtiyxnrhgx6qdhmn****.yundunwaf5.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The access ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The listeners.
   */
  listen?: DescribeHybridCloudResourcesResponseBodyDomainsListen;
  /**
   * @remarks
   * The configurations of the forwarding rule.
   */
  redirect?: DescribeHybridCloudResourcesResponseBodyDomainsRedirect;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **1:** The domain name is in a normal state.
   * *   **2:** The domain name is being created.
   * *   **3:** The domain name is being modified.
   * *   **4:** The domain name is being released.
   * *   **5:** WAF no longer forwards the traffic of the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 130715431409****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      id: 'Id',
      listen: 'Listen',
      redirect: 'Redirect',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      id: 'number',
      listen: DescribeHybridCloudResourcesResponseBodyDomainsListen,
      redirect: DescribeHybridCloudResourcesResponseBodyDomainsRedirect,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(this.listen && typeof (this.listen as any).validate === 'function') {
      (this.listen as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

