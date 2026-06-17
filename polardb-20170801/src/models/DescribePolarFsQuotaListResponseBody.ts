// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaListResponseBodyQuotaItems extends $dara.Model {
  /**
   * @remarks
   * The capacity in bytes.
   * 
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @remarks
   * The inode quota.
   * 
   * @example
   * 100
   */
  inodes?: number;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The used capacity in bytes.
   * 
   * @example
   * 104857600
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The number of inodes in use.
   * 
   * @example
   * 1
   */
  usedInodes?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      inodes: 'Inodes',
      path: 'Path',
      usedCapacity: 'UsedCapacity',
      usedInodes: 'UsedInodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      inodes: 'number',
      path: 'string',
      usedCapacity: 'number',
      usedInodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsQuotaListResponseBody extends $dara.Model {
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
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of records per page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * @example
   * pfs-test****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * A list of directory quotas.
   */
  quotaItems?: DescribePolarFsQuotaListResponseBodyQuotaItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      polarFsInstanceId: 'PolarFsInstanceId',
      quotaItems: 'QuotaItems',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageRecordCount: 'string',
      pageSize: 'string',
      polarFsInstanceId: 'string',
      quotaItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaListResponseBodyQuotaItems },
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotaItems)) {
      $dara.Model.validateArray(this.quotaItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

