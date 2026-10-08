// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of projects to return. Valid values: 0 to 200. If this parameter is not set or is set to 0, the default value is 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call. The list of projects is returned in lexicographical order starting from the NextToken value. Leave this parameter empty when you call this API operation for the first time.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDAx
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix used to filter projects. The length is limited to 0 to 128 characters.
   * 
   * @example
   * immtest
   */
  prefix?: string;
  /**
   * @remarks
   * The tag list.
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

