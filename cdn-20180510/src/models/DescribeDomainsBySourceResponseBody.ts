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

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos extends $dara.Model {
  domainInfo?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo },
    };
  }

  validate() {
    if(Array.isArray(this.domainInfo)) {
      $dara.Model.validateArray(this.domainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains extends $dara.Model {
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domainNames: 'domainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $dara.Model {
  /**
   * @remarks
   * Information about the domain name.
   */
  domainInfos?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
  /**
   * @remarks
   * The domain names that correspond to each origin server.
   */
  domains?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
  /**
   * @remarks
   * The origin server.
   * 
   * @example
   * example.com
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      domains: 'Domains',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
      domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
      source: 'string',
    };
  }

  validate() {
    if(this.domainInfos && typeof (this.domainInfos as any).validate === 'function') {
      (this.domainInfos as any).validate();
    }
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsList extends $dara.Model {
  domainsData?: DescribeDomainsBySourceResponseBodyDomainsListDomainsData[];
  static names(): { [key: string]: string } {
    return {
      domainsData: 'DomainsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsData: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsData },
    };
  }

  validate() {
    if(Array.isArray(this.domainsData)) {
      $dara.Model.validateArray(this.domainsData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names corresponding to each origin server.
   */
  domainsList?: DescribeDomainsBySourceResponseBodyDomainsList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B0F074E5-A1AC-4B32-8EA2-6F450410D1E0
   */
  requestId?: string;
  /**
   * @remarks
   * The origin servers.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      domainsList: 'DomainsList',
      requestId: 'RequestId',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
      requestId: 'string',
      sources: 'string',
    };
  }

  validate() {
    if(this.domainsList && typeof (this.domainsList as any).validate === 'function') {
      (this.domainsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

