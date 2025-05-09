// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePackageDeductionsResponseBodyDeductions } from "./DescribePackageDeductionsResponseBodyDeductions";


export class DescribePackageDeductionsResponseBody extends $dara.Model {
  deductions?: DescribePackageDeductionsResponseBodyDeductions[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  totalUsedCoreTime?: number;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalUsedCoreTime: 'TotalUsedCoreTime',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductions: { 'type': 'array', 'itemType': DescribePackageDeductionsResponseBodyDeductions },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalUsedCoreTime: 'number',
      totalUsedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deductions)) {
      $dara.Model.validateArray(this.deductions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

