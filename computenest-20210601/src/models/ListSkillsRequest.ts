// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * - `SkillId`: The Skill ID. An exact match is performed.
   * 
   * - `SkillSpaceId`: The ID of the SkillSpace. An exact match is performed.
   * 
   * - `SkillName`: The Skill name.
   * 
   * - `MatchType`: The match type for `SkillName`. Valid values: `exact` (exact match), `prefix` (prefix match), and `fuzzy` (fuzzy match).
   * 
   * - `SkillType`: The Skill type. Valid values: `official` and `custom`.
   * 
   * - `Keyword`: The keyword for a fuzzy match on the Skill name or Skill description.
   * 
   * - `SkillLabels`: The Skill labels. A fuzzy match is performed.
   * 
   * @example
   * SkillId
   */
  name?: string;
  /**
   * @remarks
   * The filter values. You can specify a maximum of 10 values.
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

export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters for querying Skills.
   */
  filter?: ListSkillsRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to return the download URL of the Skill package.
   * 
   * @example
   * false
   */
  needDownloadUrl?: boolean;
  /**
   * @remarks
   * The token for the next page of results. Leave this parameter empty for the first request. For subsequent requests, use the `NextToken` value from the previous response.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
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
      filter: { 'type': 'array', 'itemType': ListSkillsRequestFilter },
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

