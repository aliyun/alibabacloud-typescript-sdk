// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseAdministratorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
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
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

