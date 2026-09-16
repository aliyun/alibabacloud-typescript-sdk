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
  /**
   * @remarks
   * The maximum number of results per page that takes effect for this request. If MaxResults is not specified, this value is the server default. If the specified value exceeds the upper limit, this value is the adjusted value.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The total number of knowledge bases bound to the agent, regardless of the number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'KnowledgeBases',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': KnowledgeBase },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
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
   * The response code. A value of Success indicates that the call was successful. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of knowledge bases bound to the agent, including entries and pagination information.
   */
  data?: ListLumaKnowledgeBasesResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value Operation success is returned if the call was successful. A specific error description is returned if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID for troubleshooting and when you submit a ticket.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates that the call was successful.
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

