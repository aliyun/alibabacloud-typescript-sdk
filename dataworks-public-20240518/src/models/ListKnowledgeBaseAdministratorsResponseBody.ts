// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseAdministratorsResponseBodyDataKnowledgeBaseAdministrators extends $dara.Model {
  /**
   * @remarks
   * The creation time of the record, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1790200400000
   */
  createTime?: number;
  /**
   * @remarks
   * The display name of the user. This field is optional and is not used to verify the user’s identity.
   * 
   * @example
   * User A
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The DataWorks user ID of the administrator.
   * 
   * @example
   * 1000000000000000
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      knowledgeBaseId: 'KnowledgeBaseId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      displayName: 'string',
      knowledgeBaseId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseAdministratorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The administrators on the current page, excluding the owner.
   */
  knowledgeBaseAdministrators?: ListKnowledgeBaseAdministratorsResponseBodyDataKnowledgeBaseAdministrators[];
  /**
   * @remarks
   * The maximum number of entries per page used for the current request. If the input parameter is omitted, the value is 20. This is not the actual number of entries returned on the current page.
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
      knowledgeBaseAdministrators: 'KnowledgeBaseAdministrators',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseAdministrators: { 'type': 'array', 'itemType': ListKnowledgeBaseAdministratorsResponseBodyDataKnowledgeBaseAdministrators },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseAdministrators)) {
      $dara.Model.validateArray(this.knowledgeBaseAdministrators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseAdministratorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: ListKnowledgeBaseAdministratorsResponseBodyData;
  /**
   * @remarks
   * The security error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeBaseAdministratorsResponseBodyData,
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

