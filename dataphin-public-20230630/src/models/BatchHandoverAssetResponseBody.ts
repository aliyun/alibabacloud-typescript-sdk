// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchHandoverAssetResponseBodyData extends $dara.Model {
  /**
   * @example
   * NullPointException
   */
  errorMessage?: string;
  /**
   * @example
   * 0
   */
  failCount?: number;
  failedGuids?: string[];
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 2
   */
  successCount?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: BatchHandoverAssetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

