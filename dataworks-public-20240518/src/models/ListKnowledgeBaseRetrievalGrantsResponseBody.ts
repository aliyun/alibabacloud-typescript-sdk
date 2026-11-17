// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseRetrievalGrantsResponseBodyDataKnowledgeBaseRetrievalGrants extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The DataWorks user ID of the principal that receives the share. When a principal is added, the system verifies whether the user is a member of the same tenant.
   * 
   * @example
   * 1000000000000000
   */
  principalId?: string;
  /**
   * @remarks
   * The type of principal that receives the share. Default value: USER. Only USER is supported in the initial release.
   * 
   * @example
   * USER
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseRetrievalGrantsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user grants on the current page.
   */
  knowledgeBaseRetrievalGrants?: ListKnowledgeBaseRetrievalGrantsResponseBodyDataKnowledgeBaseRetrievalGrants[];
  /**
   * @remarks
   * The maximum number of entries per page used in the current request. If you do not specify this parameter in the request, the value is 20. This value is not the actual number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for the next page. If no subsequent pages exist, null is returned.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseRetrievalGrants: 'KnowledgeBaseRetrievalGrants',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseRetrievalGrants: { 'type': 'array', 'itemType': ListKnowledgeBaseRetrievalGrantsResponseBodyDataKnowledgeBaseRetrievalGrants },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseRetrievalGrants)) {
      $dara.Model.validateArray(this.knowledgeBaseRetrievalGrants);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseRetrievalGrantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. You can use this code to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: ListKnowledgeBaseRetrievalGrantsResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeBaseRetrievalGrantsResponseBodyData,
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

