// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $dara.Model {
  /**
   * @example
   * 1
   */
  defenseCountUsage?: number;
  /**
   * @example
   * 10
   */
  domainUsage?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  portUsage?: number;
  /**
   * @example
   * 1
   */
  siteUsage?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountUsage: 'DefenseCountUsage',
      domainUsage: 'DomainUsage',
      instanceId: 'InstanceId',
      portUsage: 'PortUsage',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountUsage: 'number',
      domainUsage: 'number',
      instanceId: 'string',
      portUsage: 'number',
      siteUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $dara.Model {
  instanceStatistics?: DescribeInstanceStatisticsResponseBodyInstanceStatistics[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatistics: 'InstanceStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatistics: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyInstanceStatistics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatistics)) {
      $dara.Model.validateArray(this.instanceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

