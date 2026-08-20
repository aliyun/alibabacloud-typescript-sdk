// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicSkillsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can specify one or more names for the query. Valid values:
   * 
   * - SkillId: the skill ID. Exact match.
   * 
   * - SkillName: the skill name.
   * 
   * - MatchType: the match type that controls how SkillName is matched. Valid values: exact, prefix, and fuzzy.
   * 
   * - Keyword: keyword match against the skill name or skill description. Fuzzy match.
   * 
   * - SkillLabels: the skill label set. Fuzzy match.
   * 
   * @example
   * SkillId
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values. Valid values of N: 1 to 10.
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
   * The filter.
   */
  filter?: ListPublicSkillsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to include the download URL for the skill package.
   * 
   * @example
   * false
   */
  needDownloadUrl?: boolean;
  /**
   * @remarks
   * The token for the next query.
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

