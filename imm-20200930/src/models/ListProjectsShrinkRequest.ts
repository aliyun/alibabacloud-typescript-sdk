// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 0 to 200. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. The operation returns the projects in lexicographical order starting from the location specified by NextToken.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDAx
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix used by the projects that you want to query. The prefix must be up to 128 characters in length.
   * 
   * @example
   * immtest
   */
  prefix?: string;
  /**
   * @remarks
   * The tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefix: 'Prefix',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefix: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

