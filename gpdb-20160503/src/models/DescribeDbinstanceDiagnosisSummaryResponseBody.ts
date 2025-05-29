// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceDiagnosisSummaryResponseBodyItems } from "./DescribeDbinstanceDiagnosisSummaryResponseBodyItems";
import { DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo } from "./DescribeDbinstanceDiagnosisSummaryResponseBodyMasterStatusInfo";
import { DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo } from "./DescribeDbinstanceDiagnosisSummaryResponseBodySegmentStatusInfo";


export class DescribeDBInstanceDiagnosisSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   */
  items?: DescribeDBInstanceDiagnosisSummaryResponseBodyItems[];
  /**
   * @remarks
   * The state information about the coordinator node.
   */
  masterStatusInfo?: DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 070534EC-78D5-5519-83CC-E7B1A9213483
   */
  requestId?: string;
  /**
   * @remarks
   * The state information about compute nodes.
   */
  segmentStatusInfo?: DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      masterStatusInfo: 'MasterStatusInfo',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      segmentStatusInfo: 'SegmentStatusInfo',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDiagnosisSummaryResponseBodyItems },
      masterStatusInfo: DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo,
      pageNumber: 'string',
      requestId: 'string',
      segmentStatusInfo: DescribeDBInstanceDiagnosisSummaryResponseBodySegmentStatusInfo,
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.masterStatusInfo && typeof (this.masterStatusInfo as any).validate === 'function') {
      (this.masterStatusInfo as any).validate();
    }
    if(this.segmentStatusInfo && typeof (this.segmentStatusInfo as any).validate === 'function') {
      (this.segmentStatusInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

