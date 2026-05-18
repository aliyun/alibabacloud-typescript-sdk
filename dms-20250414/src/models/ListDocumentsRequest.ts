// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsRequest extends $dara.Model {
  /**
   * @example
   * {"fileExt":"pdf","state":0}
   */
  filters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * test
   */
  namePattern?: string;
  /**
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @example
   * hits
   */
  sortFieldName?: string;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      kbUuid: 'KbUuid',
      maxResults: 'MaxResults',
      namePattern: 'NamePattern',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      kbUuid: 'string',
      maxResults: 'number',
      namePattern: 'string',
      nextToken: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

