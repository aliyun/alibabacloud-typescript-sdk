// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page of results. Omit this for the first request. For subsequent requests, set this to the `NextToken` from the previous response.
   * 
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for a fuzzy match on Skill names.
   * 
   * @example
   * analysis
   */
  q?: string;
  /**
   * @remarks
   * Filters the results by visibility level. You can specify multiple values.
   */
  visibilityShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      q: 'Q',
      visibilityShrink: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      q: 'string',
      visibilityShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

