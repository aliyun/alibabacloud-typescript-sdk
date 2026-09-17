// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseSearchChunk } from "./KnowledgeBaseSearchChunk";


export class SearchKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of matched chunks, sorted by relevance.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","ChunkSeq":3,"Content":"EventBridge supports event routing"}]
   */
  chunks?: KnowledgeBaseSearchChunk[];
  /**
   * @remarks
   * The server-side processing duration of this search. Unit: milliseconds.
   * 
   * @example
   * 128
   */
  timeSpent?: number;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      timeSpent: 'TimeSpent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': KnowledgeBaseSearchChunk },
      timeSpent: 'number',
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

export class SearchKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The search results, including the list of matched chunks and the time spent.
   */
  data?: SearchKnowledgeBaseResponseBodyData;
  /**
   * @remarks
   * The response message. A value of Operation success is returned for a successful call. A specific error description is returned for a failed call.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
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
      data: SearchKnowledgeBaseResponseBodyData,
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

