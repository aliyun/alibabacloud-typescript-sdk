// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaListResponseBodyQuotaItems extends $dara.Model {
  /**
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @remarks
   * Inodes
   * 
   * @example
   * 100
   */
  inodes?: number;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @example
   * 104857600
   */
  usedCapacity?: number;
  /**
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
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * pfs-test****
   */
  polarFsInstanceId?: string;
  quotaItems?: DescribePolarFsQuotaListResponseBodyQuotaItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
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

