// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagValuesRequest extends $dara.Model {
  matchType?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

