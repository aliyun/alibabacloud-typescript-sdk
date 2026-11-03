// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDisplayKnowledgeResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The description of the failure reason. This parameter is returned only when the status is FAILED.
   * 
   * @example
   * Image not accessible
   */
  failureMessage?: string;
  /**
   * @remarks
   * The code of the failure reason. This parameter is returned only when the status is FAILED.
   * 
   * @example
   * Image not accessible
   */
  failureReason?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2026-08-01T15:53:46Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The 24-hour signed URL of the transferred image.
   * 
   * @example
   * https://xxx/2190149752-0-cib.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The expiration time of the signed URL.
   * 
   * @example
   * Date
   */
  imageUrlExpireTime?: string;
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 4410879640480000
   */
  recordId?: number;
  /**
   * @remarks
   * SKU ID
   * 
   * @example
   * sku-001
   */
  skuId?: string;
  /**
   * @remarks
   * The name of the SKU.
   * 
   * @example
   * Product side image
   */
  skuName?: string;
  /**
   * @remarks
   * The status of the record.
   * 
   * @example
   * UPDATING - Updating
   * EMBEDDED - Vectorization completed
   * FAILED - Processing failed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      failureReason: 'FailureReason',
      gmtModified: 'GmtModified',
      imageUrl: 'ImageUrl',
      imageUrlExpireTime: 'ImageUrlExpireTime',
      recordId: 'RecordId',
      skuId: 'SkuId',
      skuName: 'SkuName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
      failureReason: 'string',
      gmtModified: 'string',
      imageUrl: 'string',
      imageUrlExpireTime: 'string',
      recordId: 'number',
      skuId: 'string',
      skuName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDisplayKnowledgeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * Success
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
   * The status of the knowledge base.
   * 
   * @example
   * AVAILABLE - Available
   */
  knowledgeBaseStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The records on the current page.
   */
  records?: QueryDisplayKnowledgeResponseBodyDataRecords[];
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
   * The ID of the asynchronous task. This parameter is empty for synchronous API operations.
   * 
   * @example
   * a8323ada-a196-9061-976f-90e38b27323a
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 17
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 20
   */
  totalPage?: number;
  /**
   * @remarks
   * The usage information. This parameter is empty for free API operations.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      knowledgeBaseStatus: 'KnowledgeBaseStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      ragId: 'RagId',
      records: 'Records',
      success: 'Success',
      taskId: 'TaskId',
      total: 'Total',
      totalPage: 'TotalPage',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      knowledgeBaseStatus: 'string',
      pageNum: 'number',
      pageSize: 'number',
      ragId: 'string',
      records: { 'type': 'array', 'itemType': QueryDisplayKnowledgeResponseBodyDataRecords },
      success: 'boolean',
      taskId: 'string',
      total: 'number',
      totalPage: 'number',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
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

export class QueryDisplayKnowledgeResponseBody extends $dara.Model {
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
   * The query result of the display knowledge base content.
   */
  data?: QueryDisplayKnowledgeResponseBodyData;
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
   * The ID of the request.
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
      data: QueryDisplayKnowledgeResponseBodyData,
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

