// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  /**
   * @remarks
   * The clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidthMbps?: number;
  /**
   * @remarks
   * The basic protection bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 30
   */
  baseBandwidth?: number;
  /**
   * @remarks
   * The specification of concurrent connections of the instance.
   * 
   * @example
   * 100000
   */
  connLimit?: number;
  /**
   * @remarks
   * The specification of new connections of the instance.
   * 
   * @example
   * 5000
   */
  cpsLimit?: number;
  /**
   * @remarks
   * The number of available advanced mitigation sessions for this month. **-1**: unlimited
   * 
   * >  This parameter is returned only when the request parameter **RegionId** is set to **ap-southeast-1**. If RegionId is set to ap-southeast-1, the specifications of Anti-DDoS Proxy (Outside Chinese Mainland) instances are queried.
   * 
   * @example
   * 2
   */
  defenseCount?: number;
  /**
   * @remarks
   * The number of domain names that can be protected by the instance.
   * 
   * @example
   * 50
   */
  domainLimit?: number;
  /**
   * @remarks
   * The burstable protection bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 30
   */
  elasticBandwidth?: number;
  /**
   * @remarks
   * The burstable clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 300
   */
  elasticBw?: number;
  /**
   * @remarks
   * The metering method of the burstable clean bandwidth. Valid values:
   * 
   * *   **day**: the metering method of daily 95th percentile
   * *   **month**: the metering method of monthly 95th percentile
   * 
   * @example
   * day
   */
  elasticBwModel?: string;
  /**
   * @remarks
   * The burstable QPS. Unit: QPS
   * 
   * @example
   * 10
   */
  elasticQps?: number;
  /**
   * @remarks
   * The metering method of the burstable QPS. Valid values:
   * 
   * *   **day**: the metering method of daily 95th percentile
   * *   **month**: the metering method of monthly 95th percentile
   * 
   * @example
   * day
   */
  elasticQpsMode?: string;
  /**
   * @remarks
   * The function plan of the instance. Valid values:
   * 
   * *   **default**: Standard
   * *   **enhance**: Enhanced
   * *   **cnhk**: Chinese Mainland Acceleration (CMA)
   * *   **cnhk_default**: Secure Chinese Mainland Acceleration (Sec-CMA) standard
   * *   **cnhk_enhance**: Sec-CMA enhanced
   * 
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-zvp2eibz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of ports that can be protected by the instance.
   * 
   * @example
   * 50
   */
  portLimit?: number;
  /**
   * @remarks
   * The clean QPS.
   * 
   * @example
   * 3000
   */
  qpsLimit?: number;
  /**
   * @remarks
   * The threshold of the clean bandwidth. Valid values: 0 to 15360. The value 0 indicates that rate limiting is never triggered. Unit: Mbit/s
   * 
   * @example
   * 0
   */
  realLimitBw?: number;
  /**
   * @remarks
   * The number of sites that can be protected by the instance.
   * 
   * @example
   * 5
   */
  siteLimit?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthMbps: 'BandwidthMbps',
      baseBandwidth: 'BaseBandwidth',
      connLimit: 'ConnLimit',
      cpsLimit: 'CpsLimit',
      defenseCount: 'DefenseCount',
      domainLimit: 'DomainLimit',
      elasticBandwidth: 'ElasticBandwidth',
      elasticBw: 'ElasticBw',
      elasticBwModel: 'ElasticBwModel',
      elasticQps: 'ElasticQps',
      elasticQpsMode: 'ElasticQpsMode',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      portLimit: 'PortLimit',
      qpsLimit: 'QpsLimit',
      realLimitBw: 'RealLimitBw',
      siteLimit: 'SiteLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthMbps: 'number',
      baseBandwidth: 'number',
      connLimit: 'number',
      cpsLimit: 'number',
      defenseCount: 'number',
      domainLimit: 'number',
      elasticBandwidth: 'number',
      elasticBw: 'number',
      elasticBwModel: 'string',
      elasticQps: 'number',
      elasticQpsMode: 'string',
      functionVersion: 'string',
      instanceId: 'string',
      portLimit: 'number',
      qpsLimit: 'number',
      realLimitBw: 'number',
      siteLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the specifications of the instance.
   */
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4E3A9B5F-5DDB-593D-A1E6-F1F451DB5E0B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpecs)) {
      $dara.Model.validateArray(this.instanceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

