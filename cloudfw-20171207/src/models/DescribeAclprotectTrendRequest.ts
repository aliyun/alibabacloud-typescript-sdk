// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1670397599
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the firewall border. Valid values:
   * - **internet** (default): Internet Border firewall, which detects and controls traffic between your assets and the Internet.
   * - **vpc**: virtual private cloud (VPC) firewalls, which detect and control traffic between VPCs.
   * - **nat**: NAT firewalls, which detect and control traffic from internal-facing assets to the Internet.
   * 
   * @example
   * vpc
   */
  firewallType?: string;
  /**
   * @remarks
   * The time aggregation granularity for trend data. Unit: seconds. Valid values:
   * - **60**: 1-minute granularity (uses the minute-level detail table).
   * - **1800**: 30-minute granularity.
   * - **3600**: 1-hour granularity.
   * - **86400** (default): 1-day granularity.
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
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
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

