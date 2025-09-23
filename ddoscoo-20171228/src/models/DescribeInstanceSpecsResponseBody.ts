// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  /**
   * @example
   * 20000
   */
  bandwidthMbps?: number;
  /**
   * @example
   * 20
   */
  baseBandwidth?: number;
  /**
   * @example
   * 10
   */
  defenseCount?: number;
  /**
   * @example
   * 50
   */
  domainLimit?: number;
  /**
   * @example
   * 20
   */
  elasticBandwidth?: number;
  /**
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 50
   */
  portLimit?: number;
  /**
   * @example
   * 1000
   */
  qpsLimit?: number;
  /**
   * @example
   * 10
   */
  siteLimit?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthMbps: 'BandwidthMbps',
      baseBandwidth: 'BaseBandwidth',
      defenseCount: 'DefenseCount',
      domainLimit: 'DomainLimit',
      elasticBandwidth: 'ElasticBandwidth',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      portLimit: 'PortLimit',
      qpsLimit: 'QpsLimit',
      siteLimit: 'SiteLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthMbps: 'number',
      baseBandwidth: 'number',
      defenseCount: 'number',
      domainLimit: 'number',
      elasticBandwidth: 'number',
      functionVersion: 'string',
      instanceId: 'string',
      portLimit: 'number',
      qpsLimit: 'number',
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
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
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

