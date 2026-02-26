// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountTagValuesRequest extends $dara.Model {
  matchType?: string;
  maxResults?: number;
  nextToken?: string;
  scope?: string;
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
      scope: 'Scope',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
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

