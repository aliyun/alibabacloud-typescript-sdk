// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $dara.Model {
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
  tag?: ListProjectsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefix: 'Prefix',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefix: 'string',
      tag: { 'type': 'array', 'itemType': ListProjectsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

