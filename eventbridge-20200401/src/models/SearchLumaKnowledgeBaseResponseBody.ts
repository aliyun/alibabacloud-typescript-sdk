// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseSearchChunk } from "./KnowledgeBaseSearchChunk";


export class SearchLumaKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of text chunks matched by the search, sorted by relevance.
   * 
   * @example
   * [{"DocumentId":"doc-bp1xxxxxxxxxxxx","ChunkSeq":3,"Content":"EventBridge supports event routing"}]
   */
  chunks?: KnowledgeBaseSearchChunk[];
  /**
   * @remarks
   * The duration of the search, in milliseconds.
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
   * The response code. The value is Success if the call is successful, or a specific error code if the call fails.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The search results from the knowledge base bound to the agent.
   */
  data?: SearchLumaKnowledgeBaseResponseBodyData;
  /**
   * @remarks
   * The response message. The value is Operation success if the call is successful, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID for troubleshooting and submitting tickets.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful.
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

