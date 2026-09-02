// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchChangeTableOwnerStatusResponseBodyDataDetails extends $dara.Model {
  /**
   * @example
   * Forbidden: You are not a member of this project
   */
  errorMessage?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * maxcompute-table:123:project_a::table_1
   */
  tableMetaEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      tableMetaEntityId: 'TableMetaEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      tableMetaEntityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchChangeTableOwnerStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 524257_openapi-req-abc123
   */
  batchId?: string;
  details?: GetBatchChangeTableOwnerStatusResponseBodyDataDetails[];
  /**
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @example
   * 5
   */
  ongoingCount?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      details: 'Details',
      failedCount: 'FailedCount',
      ongoingCount: 'OngoingCount',
      status: 'Status',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      details: { 'type': 'array', 'itemType': GetBatchChangeTableOwnerStatusResponseBodyDataDetails },
      failedCount: 'number',
      ongoingCount: 'number',
      status: 'string',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchChangeTableOwnerStatusResponseBody extends $dara.Model {
  data?: GetBatchChangeTableOwnerStatusResponseBodyData;
  /**
   * @example
   * 01A017D3-207E-582C-A683-BE991E54051D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetBatchChangeTableOwnerStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

