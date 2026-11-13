// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesResponseBodyDataKnowledgeBases extends $dara.Model {
  /**
   * @remarks
   * The read-only access role of the current caller for the knowledge base. Valid values:
   * - OWNER: owner
   * - ADMIN: administrator
   * - VIEWER: viewer
   * 
   * @example
   * OWNER
   */
  accessRole?: string;
  /**
   * @remarks
   * The creation time of the knowledge base. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1794369600000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the knowledge base. This field can be empty if no description is set.
   * 
   * @example
   * Knowledge about sales metrics, orders, and business policies
   */
  description?: string;
  /**
   * @remarks
   * The stable ID of the knowledge base, which can be used to limit the search scope.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The last modification time of the knowledge base. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1794373200000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * Sales knowledge base
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks user ID of the knowledge base owner.
   * 
   * @example
   * 1000000000000000
   */
  owner?: string;
  /**
   * @remarks
   * The public status of the knowledge base. This list returns only normally visible knowledge bases, and the value is ACTIVE.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The type of the knowledge base. Valid values:
   * - PERSONAL: personal knowledge base
   * - ENTERPRISE: enterprise knowledge base
   * 
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessRole: 'AccessRole',
      createTime: 'CreateTime',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRole: 'string',
      createTime: 'number',
      description: 'string',
      knowledgeBaseId: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of knowledge bases that the current caller has permission to view in the current region.
   */
  knowledgeBases?: ListKnowledgeBasesResponseBodyDataKnowledgeBases[];
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter when you request the first page. For subsequent pages, use the NextToken value returned in the previous response as is. An empty response indicates that no more pages are available. If the current page is empty but the cursor is not empty, continue pagination. Keep the same MaxResults value during pagination.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'KnowledgeBases',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': ListKnowledgeBasesResponseBodyDataKnowledgeBases },
      nextToken: 'string',
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

export class ListKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. This field is omitted when the request is successful. If the request fails, the common error response protocol is followed.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The list of knowledge bases on the current page and the cursor for the next page.
   */
  data?: ListKnowledgeBasesResponseBodyData;
  /**
   * @remarks
   * The maximum number of knowledge bases to return per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The readable description of the business error. This field is omitted when the request is successful. Provide the RequestId along with this message when troubleshooting failures.
   * 
   * @example
   * The request parameters are invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
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
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeBasesResponseBodyData,
      maxResults: 'number',
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

