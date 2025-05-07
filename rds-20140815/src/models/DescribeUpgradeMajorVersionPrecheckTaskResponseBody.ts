// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems } from "./DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems";


export class DescribeUpgradeMajorVersionPrecheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the upgrade check report.
   */
  items?: DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1586777-41B5-5F9E-81E8-93DFDD379024
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the upgrade check report.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeUpgradeMajorVersionPrecheckTaskResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

