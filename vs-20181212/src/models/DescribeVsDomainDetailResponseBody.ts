// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainDetailResponseBodyDomainConfig extends $dara.Model {
  /**
   * @remarks
   * The CNAME assigned to the Visual Edge Computing Service domain. You must configure your DNS provider to point your domain to this CNAME.
   * 
   * @example
   * example.aliyundoc.com.*****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain description.
   * 
   * @example
   * 测试使用
   */
  description?: string;
  /**
   * @remarks
   * The Visual Edge Computing Service domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the Visual Edge Computing Service accelerated domain. Valid values:
   * 
   * - **online**: Enabled.
   * 
   * - **offline**: Disabled.
   * 
   * - **configuring**: Being configured.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The domain type.
   * 
   * > Static value: vs
   * 
   * @example
   * vs
   */
  domainType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The most recent modification time.
   * 
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The region where the domain is located.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off** (default): Disabled.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * - **domestic**
   * 
   * - **overseas**
   * 
   * - **global**
   * 
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
  /**
   * @remarks
   * Domain configuration details.
   */
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
  /**
   * @remarks
   * The request ID.
   * 
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

