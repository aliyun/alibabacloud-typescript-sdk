// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncJobDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The content hash.
   * 
   * @example
   * sha256:4b3b7b2e5f6a1c9d8e0f1234567890abcdef1234567890abcdef1234567890ab
   */
  contentHash?: string;
  /**
   * @remarks
   * The ContextDB document ID.
   * 
   * @example
   * cd-as1llqmkol****
   */
  ctxdbDocumentId?: string;
  /**
   * @remarks
   * The source document ID.
   * 
   * @example
   * doc-1234567890
   */
  providerDocumentId?: string;
  /**
   * @remarks
   * The retirement time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  retiredAt?: string;
  /**
   * @remarks
   * The source update time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  sourceUpdateTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      contentHash: 'ContentHash',
      ctxdbDocumentId: 'CtxdbDocumentId',
      providerDocumentId: 'ProviderDocumentId',
      retiredAt: 'RetiredAt',
      sourceUpdateTime: 'SourceUpdateTime',
      status: 'Status',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentHash: 'string',
      ctxdbDocumentId: 'string',
      providerDocumentId: 'string',
      retiredAt: 'string',
      sourceUpdateTime: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of documents.
   * 
   * @example
   * [{"ProviderDocumentId":"doc-1234567890", "Status":"completed", "ContentHash":"sha256:4b3b7b2e5f6a1c9d8e0f1234567890abcdef1234567890abcdef1234567890ab", "SourceUpdateTime":"2026-09-23T10:00:00+08:00"}]
   */
  documents?: ListContextDatabaseSyncJobDocumentsResponseBodyDataDocuments[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': ListContextDatabaseSyncJobDocumentsResponseBodyDataDocuments },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncJobDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListContextDatabaseSyncJobDocumentsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
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
      data: ListContextDatabaseSyncJobDocumentsResponseBodyData,
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

