// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  bandwidthMbps?: number;
  baseBandwidth?: number;
  connLimit?: number;
  cpsLimit?: number;
  defenseCount?: number;
  domainLimit?: number;
  elasticBandwidth?: number;
  elasticBw?: number;
  elasticBwModel?: string;
  elasticQps?: number;
  elasticQpsMode?: string;
  functionVersion?: string;
  instanceId?: string;
  portLimit?: number;
  qpsLimit?: number;
  realLimitBw?: number;
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
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
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

