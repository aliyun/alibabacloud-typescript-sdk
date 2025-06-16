// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages } from "./DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages";


export class DescribeCommonBandwidthPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Internet Shared Bandwidth instance.
   */
  commonBandwidthPackages?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20E6FD1C-7321-4DAD-BDFD-EC8769E4AA33
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commonBandwidthPackages: 'CommonBandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonBandwidthPackages: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.commonBandwidthPackages && typeof (this.commonBandwidthPackages as any).validate === 'function') {
      (this.commonBandwidthPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

