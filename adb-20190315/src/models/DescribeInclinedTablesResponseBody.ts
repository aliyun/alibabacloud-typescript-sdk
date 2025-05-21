// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInclinedTablesResponseBodyDetectionItems } from "./DescribeInclinedTablesResponseBodyDetectionItems";
import { DescribeInclinedTablesResponseBodyItems } from "./DescribeInclinedTablesResponseBodyItems";


export class DescribeInclinedTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeInclinedTablesResponseBodyDetectionItems[];
  /**
   * @remarks
   * The queried tables.
   */
  items?: DescribeInclinedTablesResponseBodyItems;
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionItems: { 'type': 'array', 'itemType': DescribeInclinedTablesResponseBodyDetectionItems },
      items: DescribeInclinedTablesResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

