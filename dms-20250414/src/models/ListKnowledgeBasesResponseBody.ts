// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaKnowledgeBase } from "./OneMetaKnowledgeBase";


export class ListKnowledgeBasesResponseBody extends $dara.Model {
  data?: OneMetaKnowledgeBase[];
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tag is not valid.
   */
  errorMessage?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OneMetaKnowledgeBase },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

