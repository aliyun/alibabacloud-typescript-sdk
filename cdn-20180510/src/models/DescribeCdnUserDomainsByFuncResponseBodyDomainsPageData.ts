// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources } from "./DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources";


export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The type of workload accelerated by Alibaba Cloud CDN. Valid values:
   * 
   * *   **web**: image and small file distribution
   * *   **download**: large file distribution
   * *   **video**: on-demand video and audio streaming
   * *   **liveStream**: live streaming
   * 
   * @example
   * web
   */
  cdnType?: string;
  /**
   * @remarks
   * The CNAME assigned to the accelerated domain name.
   * 
   * @example
   * example.com.w.alikunlun.com
   */
  cname?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * audit failed
   */
  description?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * *   **online**: The domain name is enabled.
   * *   **offline**: The domain is disabled.
   * *   **configuring**: The endpoint group is being configured.
   * *   **configure_failed**: The domain failed to be configured.
   * *   **checking**: The domain name is under review.
   * *   **check_failed**: The domain name failed the review.
   * *   **stopping**: The domain name is be disabled.
   * *   **deleting**: being deleted
   * 
   * @example
   * configure_failed
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the accelerated domain name was added to Alibaba Cloud CDN.
   * 
   * @example
   * 2015-10-28T11:05:52Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last time when the accelerated domain was modified.
   * 
   * @example
   * 2015-10-29T10:15:31Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sources: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
    };
  }

  validate() {
    if(this.sources && typeof (this.sources as any).validate === 'function') {
      (this.sources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

