// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The asset to which the chunk belongs.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The logical sequence number that starts from 1 within the published asset. Resplitting may change the sequence number. You must pass back the chunkToken of this chunk when you edit it.
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The number of UTF-16 code units in the chunk content. This metric follows the EB ChunkSize calculation standard.
   * 
   * @example
   * 512
   */
  chunkSize?: number;
  /**
   * @remarks
   * The opaque token that must be passed back as is during updates. The token is validated against the current publish result at the beginning of the request. An error is returned if the token has expired. After a pure enable or disable operation starts, the token does not follow new concurrent publish results. Do not parse or generate this token.
   * 
   * @example
   * ct-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  chunkToken?: string;
  /**
   * @remarks
   * The content of the currently published chunk.
   * 
   * @example
   * Welcome to the product
   */
  content?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format in UTC.
   * 
   * @example
   * 2026-10-27T02:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether the chunk is enabled. Disabled chunks are not included in searches. Administrative permissions are still required for chunk O&M queries.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the source file that corresponds to the published chunk.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The location in the source file. The format follows the EB positioning convention, such as p.3 for PDF files, s.2 for PPT files, or the worksheet name for spreadsheets. The previous location is not returned if manual editing invalidates the mapping.
   * 
   * @example
   * p.3
   */
  sourceLocation?: string;
  /**
   * @remarks
   * The hierarchical heading path where the chunk is located. This parameter is not returned if the location cannot be determined.
   * 
   * @example
   * Product Guide > Configuration
   */
  titlePath?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format in UTC.
   * 
   * @example
   * 2026-10-27T02:05:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      chunkSeq: 'chunkSeq',
      chunkSize: 'chunkSize',
      chunkToken: 'chunkToken',
      content: 'content',
      createdAt: 'createdAt',
      enabled: 'enabled',
      fileName: 'fileName',
      sourceLocation: 'sourceLocation',
      titlePath: 'titlePath',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      chunkSeq: 'number',
      chunkSize: 'number',
      chunkToken: 'string',
      content: 'string',
      createdAt: 'string',
      enabled: 'boolean',
      fileName: 'string',
      sourceLocation: 'string',
      titlePath: 'string',
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

export class ListChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The stable result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The actual HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The currently published chunks. Chunks within a single asset are sorted by chunkSeq. Chunks across assets are sorted by assetId and chunkSeq.
   */
  items?: ListChunksResponseBodyItems[];
  /**
   * @remarks
   * The page size used for the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The description of the data masking result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. Pass this value as is in the nextToken parameter of the subsequent request to continue pagination. If this value is empty, all results have been returned.
   * 
   * @example
   * opaque-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of chunks that match the filter conditions in the current published generation of the asset. This parameter is returned only when assetId is specified. It is not returned for cross-asset queries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListChunksResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

