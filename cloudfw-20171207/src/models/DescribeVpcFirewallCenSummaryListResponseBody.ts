// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenSummaryListResponseBodyCenList extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-maqfw3abcmjy56****
   */
  cenId?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * test
   */
  cenName?: string;
  /**
   * @remarks
   * The list of region IDs for the VPC border firewall.
   */
  regionNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenName: 'CenName',
      regionNoList: 'RegionNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenName: 'string',
      regionNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionNoList)) {
      $dara.Model.validateArray(this.regionNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenSummaryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of CEN instances.
   */
  cenList?: DescribeVpcFirewallCenSummaryListResponseBodyCenList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 432D6CCA-5186-5B91-A2B8-10C8994B****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenList: 'CenList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenSummaryListResponseBodyCenList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cenList)) {
      $dara.Model.validateArray(this.cenList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

