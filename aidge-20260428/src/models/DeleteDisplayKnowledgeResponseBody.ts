// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDisplayKnowledgeResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The error code for the failure.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The cause of the failure.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The index in the original request array.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 2746611117
   */
  recordId?: number;
  /**
   * @remarks
   * The SKU ID. This field is empty for deletion results.
   * 
   * @example
   * sku-001
   */
  skuId?: string;
  /**
   * @remarks
   * The record status. This field is empty for deletion results.
   * 
   * @example
   * Empty for the deletion API
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the deletion is successful.
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

export class DeleteDisplayKnowledgeResponseBodyData extends $dara.Model {
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
   * The status of the knowledge base.
   * 
   * @example
   * UPDATING
   */
  knowledgeBaseStatus?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * rag_001
   */
  ragId?: string;
  /**
   * @remarks
   * The number of visible records after the deletion.
   * 
   * @example
   * 50
   */
  remainingCount?: number;
  /**
   * @remarks
   * The processing results for each record.
   */
  results?: DeleteDisplayKnowledgeResponseBodyDataResults[];
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
   * The asynchronous task ID. This field is empty for synchronous API operations.
   * 
   * @example
   * task-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The usage information. This field is empty for free API operations.
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
      remainingCount: 'RemainingCount',
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
      remainingCount: 'number',
      results: { 'type': 'array', 'itemType': DeleteDisplayKnowledgeResponseBodyDataResults },
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

export class DeleteDisplayKnowledgeResponseBody extends $dara.Model {
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
   * The deletion results for the display knowledge base content.
   */
  data?: DeleteDisplayKnowledgeResponseBodyData;
  /**
   * @remarks
   * The response message or failure description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
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
      data: DeleteDisplayKnowledgeResponseBodyData,
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

