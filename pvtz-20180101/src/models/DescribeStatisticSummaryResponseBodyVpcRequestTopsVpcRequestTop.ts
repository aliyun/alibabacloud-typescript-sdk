// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * 华北 2
   */
  regionName?: string;
  /**
   * @remarks
   * The number of DNS requests on the previous day.
   * 
   * @example
   * 2254
   */
  requestCount?: number;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-7h33lkqfuhgnyy****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      requestCount: 'RequestCount',
      tunnelId: 'TunnelId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      requestCount: 'number',
      tunnelId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

