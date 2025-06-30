// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStatisticSummaryResponseBodyVpcRequestTops } from "./DescribeStatisticSummaryResponseBodyVpcRequestTops";
import { DescribeStatisticSummaryResponseBodyZoneRequestTops } from "./DescribeStatisticSummaryResponseBodyZoneRequestTops";


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

