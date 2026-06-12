// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicSkillsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter criterion. Valid values:
   * 
   * - `SkillId`: The ID of the skill. An exact match is performed.
   * 
   * - `SkillName`: The name of the skill.
   * 
   * - `MatchType`: The match type for the `SkillName` filter. Valid values: `exact` (exact match), `prefix` (prefix match), and `fuzzy` (fuzzy match).
   * 
   * - `Keyword`: The keyword used for a fuzzy match on the skill name or skill description.
   * 
   * - `SkillLabels`: The skill labels. A fuzzy match is performed.
   * 
   * @example
   * SkillId
   */
  name?: string;
  /**
   * @remarks
   * The filter values. You can specify 1 to 10 values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of filters.
   */
  filter?: ListPublicSkillsRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to return the download link for the skill package.
   * 
   * @example
   * false
   */
  needDownloadUrl?: boolean;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      needDownloadUrl: 'NeedDownloadUrl',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListPublicSkillsRequestFilter },
      maxResults: 'number',
      needDownloadUrl: 'boolean',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

