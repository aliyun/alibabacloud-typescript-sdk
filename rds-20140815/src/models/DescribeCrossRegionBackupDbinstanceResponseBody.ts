// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionBackupDBInstanceResponseBodyItems } from "./DescribeCrossRegionBackupDbinstanceResponseBodyItems";


export class DescribeCrossRegionBackupDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cross-region backup settings.
   */
  items?: DescribeCrossRegionBackupDBInstanceResponseBodyItems;
  /**
   * @remarks
   * The total number of items returned for cross-region backup settings.
   * 
   * @example
   * 1
   */
  itemsNumbers?: number;
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
   * The number of entries per page. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
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
   * 33517002-182D-40BE-93EC-610BD3381045
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeCrossRegionBackupDBInstanceResponseBodyItems,
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalRecords: 'number',
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

