// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId extends $dara.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBodyRegionIds extends $dara.Model {
  regionId?: DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId },
    };
  }

  validate() {
    if(Array.isArray(this.regionId)) {
      $dara.Model.validateArray(this.regionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeographicRegionMembershipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  regionIds?: DescribeGeographicRegionMembershipResponseBodyRegionIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC9EB0C9-60AF-4A09-A36C-608F70130274
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

