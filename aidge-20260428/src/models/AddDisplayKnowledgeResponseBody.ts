// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDisplayKnowledgeResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The failure error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * The deviceName format is incorrect.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The index in the original request array.
   * 
   * @example
   * 3
   */
  index?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 204737029000011
   */
  recordId?: number;
  /**
   * @remarks
   * The effective SKU ID.
   * 
   * @example
   * sku-001
   */
  skuId?: string;
  /**
   * @remarks
   * The record status.
   * 
   * @example
   * UPDATING-Updating
   * EMBEDDED-Vectorization completed
   * FAILED-Failed
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the record is accepted.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      index: 'Index',
      recordId: 'RecordId',
      skuId: 'SkuId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      index: 'number',
      recordId: 'number',
      skuId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDisplayKnowledgeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of accepted records.
   * 
   * @example
   * 10
   */
  acceptedCount?: number;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of failed records.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The knowledge base status.
   * 
   * @example
   * UPDATING-Updating
   * AVAILABLE-Available
   * UNAVAILABLE-Unavailable
   */
  knowledgeBaseStatus?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * rag_xxxx
   */
  ragId?: string;
  /**
   * @remarks
   * The processing results for each record.
   */
  results?: AddDisplayKnowledgeResponseBodyDataResults[];
  /**
   * @remarks
   * Indicates whether the business processing is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The asynchronous task ID. This parameter is empty for synchronous API operations.
   * 
   * @example
   * 0ea3b66e88a543658520c994f08896a0
   */
  taskId?: string;
  /**
   * @remarks
   * The usage information. This parameter is empty for free API operations.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      acceptedCount: 'AcceptedCount',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      failedCount: 'FailedCount',
      knowledgeBaseStatus: 'KnowledgeBaseStatus',
      ragId: 'RagId',
      results: 'Results',
      success: 'Success',
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedCount: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      failedCount: 'number',
      knowledgeBaseStatus: 'string',
      ragId: 'string',
      results: { 'type': 'array', 'itemType': AddDisplayKnowledgeResponseBodyDataResults },
      success: 'boolean',
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDisplayKnowledgeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The result of adding content to the display knowledge base.
   */
  data?: AddDisplayKnowledgeResponseBodyData;
  /**
   * @remarks
   * The returned message or failure description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddDisplayKnowledgeResponseBodyData,
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

