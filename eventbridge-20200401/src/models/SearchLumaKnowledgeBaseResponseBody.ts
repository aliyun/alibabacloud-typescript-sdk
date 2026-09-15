// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseSearchChunk } from "./KnowledgeBaseSearchChunk";


export class SearchLumaKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of matched text chunks, sorted by relevance.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","ChunkSeq":3,"Content":"EventBridge supports event routing"}]
   */
  chunks?: KnowledgeBaseSearchChunk[];
  /**
   * @remarks
   * The time spent on the retrieval, in milliseconds.
   * 
   * @example
   * 1200
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

export class SearchLumaKnowledgeBaseResponseBody extends $dara.Model {
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
   * The retrieval result from the knowledge base bound to the Agent.
   */
  data?: SearchLumaKnowledgeBaseResponseBodyData;
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
   * The unique identifier of the request, used for troubleshooting and ticket feedback.
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
      data: SearchLumaKnowledgeBaseResponseBodyData,
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

