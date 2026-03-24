// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBodyDomainsBackedsHttp extends $dara.Model {
  /**
   * @remarks
   * The origin address for the HTTP protocol.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackedsHttps extends $dara.Model {
  /**
   * @remarks
   * The origin address for the HTTPS protocol.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsBackeds extends $dara.Model {
  /**
   * @remarks
   * The list of origin addresses for the HTTP protocol.
   */
  http?: DescribeDomainsResponseBodyDomainsBackedsHttp[];
  /**
   * @remarks
   * The list of origin addresses for the HTTPS protocol.
   */
  https?: DescribeDomainsResponseBodyDomainsBackedsHttps[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttp },
      https: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsBackedsHttps },
    };
  }

  validate() {
    if(Array.isArray(this.http)) {
      $dara.Model.validateArray(this.http);
    }
    if(Array.isArray(this.https)) {
      $dara.Model.validateArray(this.https);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsListenPorts extends $dara.Model {
  /**
   * @remarks
   * The list of listening ports for the HTTP protocol.
   */
  http?: number[];
  /**
   * @remarks
   * The list of listening ports for the HTTPS protocol.
   */
  https?: number[];
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.http)) {
      $dara.Model.validateArray(this.http);
    }
    if(Array.isArray(this.https)) {
      $dara.Model.validateArray(this.https);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin configuration.
   */
  backeds?: DescribeDomainsResponseBodyDomainsBackeds;
  /**
   * @remarks
   * The canonical name (CNAME) that is assigned to the domain name by WAF.
   * 
   * @example
   * xxxxxcvdaf.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that is added to WAF.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  /**
   * @remarks
   * The listener configuration.
   */
  listenPorts?: DescribeDomainsResponseBodyDomainsListenPorts;
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
   * - **1**: The domain name is in a normal state.
   * 
   * - **2**: The domain name is being created.
   * 
   * - **3**: The domain name is being modified.
   * 
   * - **4**: The domain name is being released.
   * 
   * - **5**: Forwarding is disabled for the domain name.
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

export class DescribeDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain names.
   */
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABF68BB3-2C48-5FA4-9750-D5FE55700E36
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain name configurations returned.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

