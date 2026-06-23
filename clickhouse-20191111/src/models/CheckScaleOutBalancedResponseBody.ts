// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckScaleOutBalancedResponseBodyTableDetailsTableDetail extends $dara.Model {
  cluster?: string;
  database?: string;
  detail?: number;
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
   * - **400**: The check failed.
   * - **200**: The check succeeded.
   * 
   * @example
   * 400
   */
  checkCode?: string;
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
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**.
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
  tableDetails?: CheckScaleOutBalancedResponseBodyTableDetails;
  /**
   * @remarks
   * The time required for the migration scale-out. Unit: minutes.
   * 
   * @example
   * 21
   */
  timeDuration?: string;
  /**
   * @remarks
   * The total number of entries.
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

