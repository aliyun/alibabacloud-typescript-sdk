// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillSpacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can specify one or more names for the query. Valid values:
   * 
   * - SkillSpaceId: the SkillSpace ID. Exact match.
   * 
   * - SkillSpaceName: the SkillSpace name.
   * 
   * - MatchType: the match type that controls the matching behavior of SkillSpace. Valid values: exact, prefix, and fuzzy.
   * 
   * @example
   * SkillSpaceId
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

export class ListSkillSpacesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListSkillSpacesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken that was returned in the previous API call.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListSkillSpacesRequestFilter },
      maxResults: 'number',
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

