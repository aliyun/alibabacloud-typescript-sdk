// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * 0
   */
  chunkCount?: number;
  /**
   * @example
   * naive
   */
  chunkMethod?: string;
  /**
   * @example
   * kb-123
   */
  datasetId?: string;
  /**
   * @example
   * doc-123
   */
  id?: string;
  /**
   * @example
   * uploaded/doc-id/example.pdf
   */
  location?: string;
  /**
   * @example
   * example.pdf
   */
  name?: string;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * RUNNING
   */
  run?: string;
  /**
   * @example
   * 1024
   */
  size?: number;
  /**
   * @example
   * pdf
   */
  suffix?: string;
  /**
   * @example
   * ""
   */
  thumbnail?: string;
  /**
   * @example
   * 0
   */
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      chunkCount: 'chunkCount',
      chunkMethod: 'chunkMethod',
      datasetId: 'datasetId',
      id: 'id',
      location: 'location',
      name: 'name',
      progress: 'progress',
      run: 'run',
      size: 'size',
      suffix: 'suffix',
      thumbnail: 'thumbnail',
      tokenCount: 'tokenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkCount: 'number',
      chunkMethod: 'string',
      datasetId: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      progress: 'number',
      run: 'string',
      size: 'number',
      suffix: 'string',
      thumbnail: 'string',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDocumentsResponseBodyData extends $dara.Model {
  documents?: AddDocumentsResponseBodyDataDocuments[];
  errors?: string[];
  static names(): { [key: string]: string } {
    return {
      documents: 'documents',
      errors: 'errors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': AddDocumentsResponseBodyDataDocuments },
      errors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDocumentsResponseBody extends $dara.Model {
  /**
   * @example
   * {"PolicyType":"AccountLevelIdentityBasedPolicy","AuthPrincipalOwnerId":"1234567890123456","AuthPrincipalType":"SubUser","AuthPrincipalDisplayName":"1234567890123456","NoPermissionType":"ImplicitDeny","AuthAction":"milvusknowledgebase:ListDatasets"}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  data?: AddDocumentsResponseBodyData;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DDDBE0E5-4314-156F-B7F1-C4BCFD25A509
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: AddDocumentsResponseBodyData,
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

