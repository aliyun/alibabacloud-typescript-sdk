// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchChangeTableOwnerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch transfer task ID. You can use this ID to call GetBatchChangeTableOwnerStatus to query the task progress.
   * 
   * @example
   * 524257_xxxxx
   */
  batchId?: string;
  /**
   * @remarks
   * The initial status of the task after submission.
   * 
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @remarks
   * The total number of tables submitted in this batch.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchChangeTableOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The submit result of the batch table ownership transfer task.
   */
  data?: SubmitBatchChangeTableOwnerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
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
      data: SubmitBatchChangeTableOwnerResponseBodyData,
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

