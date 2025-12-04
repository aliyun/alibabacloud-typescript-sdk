// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckScaleOutBalancedResponseBodyTableDetailsTableDetail extends $dara.Model {
  /**
   * @remarks
   * The cluster. The value is fixed as **default**.
   * 
   * @example
   * default
   */
  cluster?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_name
   */
  database?: string;
  /**
   * @remarks
   * The error details. Valid values:
   * 
   * *   **1**: The unique distributed table is missing.
   * *   **2**: More than one distributed table exists for the local table.
   * 
   * @example
   * 1
   */
  detail?: number;
  /**
   * @remarks
   * The name of the local table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      database: 'Database',
      detail: 'Detail',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      database: 'string',
      detail: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBodyTableDetails extends $dara.Model {
  tableDetail?: CheckScaleOutBalancedResponseBodyTableDetailsTableDetail[];
  static names(): { [key: string]: string } {
    return {
      tableDetail: 'TableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableDetail: { 'type': 'array', 'itemType': CheckScaleOutBalancedResponseBodyTableDetailsTableDetail },
    };
  }

  validate() {
    if(Array.isArray(this.tableDetail)) {
      $dara.Model.validateArray(this.tableDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * 
   * *   **400**: The cluster failed the check.
   * *   **200**: The cluster passed the check.
   * 
   * @example
   * 400
   */
  checkCode?: string;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * The error information returned for a check failure.
   */
  tableDetails?: CheckScaleOutBalancedResponseBodyTableDetails;
  /**
   * @remarks
   * The amount of time that is required for the migration and scale-out. Unit: minutes.
   * 
   * @example
   * 21
   */
  timeDuration?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkCode: 'CheckCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tableDetails: 'TableDetails',
      timeDuration: 'TimeDuration',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tableDetails: CheckScaleOutBalancedResponseBodyTableDetails,
      timeDuration: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.tableDetails && typeof (this.tableDetails as any).validate === 'function') {
      (this.tableDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

