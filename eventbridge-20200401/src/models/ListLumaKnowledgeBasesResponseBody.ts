// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBase } from "./KnowledgeBase";


export class ListLumaKnowledgeBasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of knowledge bases bound to the agent.
   * 
   * @example
   * [{"KnowledgeBaseName":"my-knowledge-base"}]
   */
  knowledgeBases?: KnowledgeBase[];
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'KnowledgeBases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': KnowledgeBase },
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBases)) {
      $dara.Model.validateArray(this.knowledgeBases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLumaKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. Otherwise, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of knowledge bases bound to the agent. All results are returned at once without pagination.
   */
  data?: ListLumaKnowledgeBasesResponseBodyData;
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
      data: ListLumaKnowledgeBasesResponseBodyData,
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

