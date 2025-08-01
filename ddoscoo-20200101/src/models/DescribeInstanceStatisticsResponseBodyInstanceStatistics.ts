// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of advanced mitigation sessions that are used in this month.
   * 
   * >  This parameter is returned only if Anti-DDoS Proxy (Outside Chinese Mainland) instances are queried.
   * 
   * @example
   * 1
   */
  defenseCountUsage?: number;
  /**
   * @remarks
   * The number of domain names that are protected by the instance.
   * 
   * @example
   * 1
   */
  domainUsage?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of ports that are protected by the instance.
   * 
   * @example
   * 2
   */
  portUsage?: number;
  /**
   * @remarks
   * The number of websites that are protected by the instance.
   * 
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

