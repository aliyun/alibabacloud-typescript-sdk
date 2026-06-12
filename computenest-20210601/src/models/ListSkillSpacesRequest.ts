// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillSpacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can specify one or more filter names. Valid values:
   * 
   * - `SkillSpaceId`: The SkillSpace ID. This filter performs an exact match.
   * 
   * - `SkillSpaceName`: The SkillSpace name.
   * 
   * - `MatchType`: The match type for the `SkillSpaceName` filter. Valid values: `exact`, `prefix`, and `fuzzy`.
   * 
   * @example
   * SkillSpaceId
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

export class ListSkillSpacesRequest extends $dara.Model {
  /**
   * @remarks
   * The query filters.
   */
  filter?: ListSkillSpacesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. To retrieve the next page, set this parameter to the `NextToken` value from the previous response.
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

