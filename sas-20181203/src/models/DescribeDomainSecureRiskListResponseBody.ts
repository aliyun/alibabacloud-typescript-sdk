// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecureRiskListResponseBodyRiskList extends $dara.Model {
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 1
   */
  alarmCount?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * globalsign
   */
  sslBrand?: string;
  /**
   * @remarks
   * Indicates whether the certificate is configured. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  sslStatus?: number;
  /**
   * @remarks
   * The UUIDs of the backend servers of the website.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      domain: 'Domain',
      sslBrand: 'SslBrand',
      sslStatus: 'SslStatus',
      uuidList: 'UuidList',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      domain: 'string',
      sslBrand: 'string',
      sslStatus: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
      vulCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecureRiskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the websites for which no certificates are installed.
   * 
   * @example
   * 1
   */
  noSslCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of risks.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The risks.
   */
  riskList?: DescribeDomainSecureRiskListResponseBodyRiskList[];
  static names(): { [key: string]: string } {
    return {
      noSslCount: 'NoSslCount',
      requestId: 'RequestId',
      riskCount: 'RiskCount',
      riskList: 'RiskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noSslCount: 'number',
      requestId: 'string',
      riskCount: 'number',
      riskList: { 'type': 'array', 'itemType': DescribeDomainSecureRiskListResponseBodyRiskList },
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

