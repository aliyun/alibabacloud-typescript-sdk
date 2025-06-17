// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo extends $dara.Model {
  /**
   * @remarks
   * The workload type of the accelerated domain name. Valid values:
   * 
   * *   **web**: images and small files
   * *   **download**: large files
   * *   **video**: on-demand video and audio streaming
   * 
   * @example
   * web
   */
  cdnType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2016-07-12T11:53:19+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The CNAME record assigned to the domain name.
   * 
   * @example
   * ***.alikunlun.com
   */
  domainCname?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.org
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **applying**: The domain name is under review.
   * *   **configuring**: The domain name is being configured.
   * *   **online**: The domain name is working as expected.
   * *   **stopping**: The domain name is being stopped.
   * *   **offline**: The domain name is disabled.
   * *   **disabling**: The domain name is being removed.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2017-03-31T04:49:00+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      createTime: 'CreateTime',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      createTime: 'string',
      domainCname: 'string',
      domainName: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

