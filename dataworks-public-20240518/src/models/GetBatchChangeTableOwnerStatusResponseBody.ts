// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchChangeTableOwnerStatusResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the table transfer fails.
   * 
   * @example
   * Forbidden: You are not a member of this project
   */
  errorMessage?: string;
  /**
   * @remarks
   * The transfer status of the table.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The metadata entity ID of the table.
   * 
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
   * @remarks
   * The batch transfer task ID.
   * 
   * @example
   * 524257_openapi-req-abc123
   */
  batchId?: string;
  /**
   * @remarks
   * The transfer result details for each table.
   */
  details?: GetBatchChangeTableOwnerStatusResponseBodyDataDetails[];
  /**
   * @remarks
   * The number of tables that failed to transfer.
   * 
   * @example
   * 1
   */
  failedCount?: number;
  /**
   * @remarks
   * The number of tables that are still being processed.
   * 
   * @example
   * 5
   */
  ongoingCount?: number;
  /**
   * @remarks
   * The overall status of the task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The number of tables that were successfully transferred.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of tables in the batch.
   * 
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
  /**
   * @remarks
   * The execution status of the batch table owner transfer task.
   */
  data?: GetBatchChangeTableOwnerStatusResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01A017D3-207E-582C-A683-BE991E54051D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

