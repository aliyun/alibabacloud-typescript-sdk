// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChunkResponseBodyData extends $dara.Model {
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
   * The 1-based logical sequence number within the published asset. Re-chunking may change the sequence number. You must pass back the chunkToken of this item when editing.
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The number of UTF-16 code units in the chunk content, using the same ChunkSize metric as EB.
   * 
   * @example
   * 512
   */
  chunkSize?: number;
  /**
   * @remarks
   * An opaque token that must be passed back as-is during updates. It is verified against the current published result at the beginning of the request, and an error is reported if it has expired. After a pure enable or disable operation starts, it does not follow new results from concurrent publishing. Do not parse or generate it manually.
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
   * The time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-10-27T02:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Disabled chunks do not participate in retrieval. Administrative permissions are still required for chunk O&M queries.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the original file corresponding to the published chunk.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * Uses the EB location format, such as p.3 for PDF, s.2 for PPT, or the worksheet name for spreadsheets. The old location is not returned when manual editing invalidates the mapping.
   * 
   * @example
   * p.3
   */
  sourceLocation?: string;
  /**
   * @remarks
   * The hierarchical title path where the chunk is located. This field is not returned if the location cannot be determined.
   * 
   * @example
   * Product Guide > Configuration
   */
  titlePath?: string;
  /**
   * @remarks
   * The time in ISO 8601 UTC format.
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

export class GetChunkResponseBody extends $dara.Model {
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
   * The details of the chunk with the specified sequence number in the currently published generation of the asset.
   */
  data?: GetChunkResponseBodyData;
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
   * The description of the data masking result.
   * 
   * @example
   * success
   */
  message?: string;
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
  static names(): { [key: string]: string } {
    return {
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
      code: 'string',
      data: GetChunkResponseBodyData,
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

