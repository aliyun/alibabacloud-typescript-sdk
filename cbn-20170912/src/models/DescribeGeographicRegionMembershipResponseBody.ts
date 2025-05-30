// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGeographicRegionMembershipResponseBodyRegionIds } from "./DescribeGeographicRegionMembershipResponseBodyRegionIds";


export class DescribeGeographicRegionMembershipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of regions.
   */
  regionIds?: DescribeGeographicRegionMembershipResponseBodyRegionIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC9EB0C9-60AF-4A09-A36C-608F70130274
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: DescribeGeographicRegionMembershipResponseBodyRegionIds,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.regionIds && typeof (this.regionIds as any).validate === 'function') {
      (this.regionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

