// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchHandoverAssetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message. This parameter is empty if no error occurs.
   * 
   * @example
   * NullPointException
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of failed transfers.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The list of asset GUIDs for which the transfer failed. This parameter is empty if all transfers succeed.
   */
  failedGuids?: string[];
  /**
   * @remarks
   * The status of the batch transfer task. Valid values:
   * - INIT: Initial.
   * - HANDOVER_RECORDS_GENERATED: Records generated.
   * - PROCESSING_WITHOUT_APPROVAL: Processing.
   * - SUCCESS: Success.
   * - FINISHED_WITH_EXCEPTION: Finished with failures.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The number of successful transfers.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of transferred assets.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      failCount: 'FailCount',
      failedGuids: 'FailedGuids',
      status: 'Status',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      failCount: 'number',
      failedGuids: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedGuids)) {
      $dara.Model.validateArray(this.failedGuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchHandoverAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of the batch asset owner transfer.
   */
  data?: BatchHandoverAssetResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchHandoverAssetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

