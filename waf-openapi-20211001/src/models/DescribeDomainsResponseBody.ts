// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBodyDomainsBackedsHttp extends $dara.Model {
  /**
   * @remarks
   * The HTTP address of the origin server.
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
   * The HTTPS address of the origin server.
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
   * The HTTP addresses of the origin server.
   */
  http?: DescribeDomainsResponseBodyDomainsBackedsHttp[];
  /**
   * @remarks
   * The HTTPS addresses of the origin server.
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
   * The HTTP listener ports.
   */
  http?: number[];
  /**
   * @remarks
   * The HTTPS listener ports.
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

export class DescribeDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that are added to WAF in CNAME record mode.
   */
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABF68BB3-2C48-5FA4-9750-D5FE55700E36
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
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

