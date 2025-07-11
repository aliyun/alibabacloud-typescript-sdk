// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainDetailResponseBodyDomainConfig extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com.*****.com
   */
  cname?: string;
  description?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @example
   * vs
   */
  domainType?: string;
  /**
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtCreated?: string;
  /**
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtModified?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @example
   * domestic
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      region: 'Region',
      SSLProtocol: 'SSLProtocol',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      region: 'string',
      SSLProtocol: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBody extends $dara.Model {
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: DescribeVsDomainDetailResponseBodyDomainConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfig && typeof (this.domainConfig as any).validate === 'function') {
      (this.domainConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

