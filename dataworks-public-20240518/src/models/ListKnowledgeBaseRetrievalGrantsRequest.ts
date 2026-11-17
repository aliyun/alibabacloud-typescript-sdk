// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseRetrievalGrantsRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The number of entries per page. This parameter is optional. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor returned from the previous page. Do not specify this parameter for the first request.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the principal that receives the share. This parameter is optional. Default value: USER. Only USER is supported in the initial release.
   * 
   * @example
   * USER
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

