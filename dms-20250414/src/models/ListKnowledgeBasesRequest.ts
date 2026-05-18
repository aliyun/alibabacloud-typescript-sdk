// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesRequest extends $dara.Model {
  /**
   * @example
   * {"state":1}
   */
  filters?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * order
   */
  namePattern?: string;
  /**
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @example
   * name
   */
  sortFieldName?: string;
  /**
   * @example
   * Desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1dq7qod8hxtt1***
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      namePattern: 'NamePattern',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      maxResults: 'number',
      namePattern: 'string',
      nextToken: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

