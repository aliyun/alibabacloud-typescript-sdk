// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseChunk } from "./KnowledgeBaseChunk";


export class ListLumaChunksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of chunk entries.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","ChunkSeq":1}]
   */
  chunks?: KnowledgeBaseChunk[];
  /**
   * @remarks
   * The pagination token for the next page (an opaque string). Pass this value as the NextToken parameter in the next request to retrieve the next page. An empty value indicates that no more data is available.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of chunks in the document.
   * 
   * @example
   * 120
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': KnowledgeBaseChunk },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates that the call succeeded. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The chunk list result, which contains chunk entries and pagination information.
   */
  data?: ListLumaChunksResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the call succeeds, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID for troubleshooting and when submitting a ticket.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success.
   * 
   * @example
   * true
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
      data: ListLumaChunksResponseBodyData,
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

