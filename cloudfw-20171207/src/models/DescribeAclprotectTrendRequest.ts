// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp in seconds.
   * 
   * @example
   * 1670397599
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * - **internet** (default): internet firewall
   * 
   * - **vpc**: VPC firewall
   * 
   * - **nat**: NAT firewall
   * 
   * @example
   * vpc
   */
  firewallType?: string;
  /**
   * @remarks
   * The time granularity for aggregating trend data, in seconds. Valid values:
   * 
   * - **60**: 1 minute
   * 
   * - **1800**: 30 minutes
   * 
   * - **3600**: 1 hour
   * 
   * - **86400** (default): 1 day
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 223.95.87.130
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp in seconds.
   * 
   * @example
   * 1677050306
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      interval: 'Interval',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      firewallType: 'string',
      interval: 'number',
      lang: 'string',
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

