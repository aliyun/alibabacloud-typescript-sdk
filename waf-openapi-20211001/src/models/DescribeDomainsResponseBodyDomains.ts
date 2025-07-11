// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsResponseBodyDomainsBackeds } from "./DescribeDomainsResponseBodyDomainsBackeds";
import { DescribeDomainsResponseBodyDomainsListenPorts } from "./DescribeDomainsResponseBodyDomainsListenPorts";


export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin settings.
   */
  backeds?: DescribeDomainsResponseBodyDomainsBackeds;
  /**
   * @remarks
   * The CNAME assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that is added to WAF in CNAME record mode.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  domainId?: string;
  /**
   * @remarks
   * The configurations of the listeners.
   */
  listenPorts?: DescribeDomainsResponseBodyDomainsListenPorts;
  /**
   * @remarks
   * The ID of the resource group.
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
   * *   **5:** WAF no longer forwards traffic that is sent to the domain name.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backeds: 'Backeds',
      cname: 'Cname',
      domain: 'Domain',
      domainId: 'DomainId',
      listenPorts: 'ListenPorts',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backeds: DescribeDomainsResponseBodyDomainsBackeds,
      cname: 'string',
      domain: 'string',
      domainId: 'string',
      listenPorts: DescribeDomainsResponseBodyDomainsListenPorts,
      resourceManagerResourceGroupId: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.backeds && typeof (this.backeds as any).validate === 'function') {
      (this.backeds as any).validate();
    }
    if(this.listenPorts && typeof (this.listenPorts as any).validate === 'function') {
      (this.listenPorts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

