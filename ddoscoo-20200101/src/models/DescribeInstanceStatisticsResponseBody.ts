// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $dara.Model {
  defenseCountUsage?: number;
  domainUsage?: number;
  instanceId?: string;
  portUsage?: number;
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

