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

export class DescribeStatisticSummaryResponseBodyVpcRequestTops extends $dara.Model {
  vpcRequestTop?: DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop[];
  static names(): { [key: string]: string } {
    return {
      vpcRequestTop: 'VpcRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop },
    };
  }

  validate() {
    if(Array.isArray(this.vpcRequestTop)) {
      $dara.Model.validateArray(this.vpcRequestTop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   RESOLVER_RULE: forwarding rule
   * *   INBOUND: inbound endpoint
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The number of DNS requests on the previous day.
   * 
   * @example
   * 2251
   */
  requestCount?: number;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * test.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      requestCount: 'RequestCount',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      requestCount: 'number',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTops extends $dara.Model {
  zoneRequestTop?: DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop },
    };
  }

  validate() {
    if(Array.isArray(this.zoneRequestTop)) {
      $dara.Model.validateArray(this.zoneRequestTop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A73F3BD0-B1A8-42A9-A9B6-689BBABC4891
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2254
   */
  totalCount?: number;
  /**
   * @remarks
   * The top three VPCs with the largest number of DNS requests.
   */
  vpcRequestTops?: DescribeStatisticSummaryResponseBodyVpcRequestTops;
  /**
   * @remarks
   * The top three zones with the largest number of DNS requests.
   */
  zoneRequestTops?: DescribeStatisticSummaryResponseBodyZoneRequestTops;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcRequestTops: 'VpcRequestTops',
      zoneRequestTops: 'ZoneRequestTops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcRequestTops: DescribeStatisticSummaryResponseBodyVpcRequestTops,
      zoneRequestTops: DescribeStatisticSummaryResponseBodyZoneRequestTops,
    };
  }

  validate() {
    if(this.vpcRequestTops && typeof (this.vpcRequestTops as any).validate === 'function') {
      (this.vpcRequestTops as any).validate();
    }
    if(this.zoneRequestTops && typeof (this.zoneRequestTops as any).validate === 'function') {
      (this.zoneRequestTops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

