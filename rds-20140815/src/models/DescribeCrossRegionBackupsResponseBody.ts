// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionBackupsResponseBodyItems } from "./DescribeCrossRegionBackupsResponseBodyItems";


export class DescribeCrossRegionBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2019-06-15T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cross-region data backup files.
   */
  items?: DescribeCrossRegionBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of cross-region data backup files on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60912B41-7579-4B5D-B289-8856030F0A6A
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2019-05-30T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      items: DescribeCrossRegionBackupsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      regionId: 'string',
      requestId: 'string',
      startTime: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

