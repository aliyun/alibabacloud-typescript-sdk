// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not pass this parameter for the first query. For subsequent queries, pass the NextToken returned in the previous response to obtain the next page.
   * 
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for fuzzy matching by skill name.
   * 
   * @example
   * analysis
   */
  q?: string;
  /**
   * @remarks
   * The visibility levels used to filter results. Multiple values can be specified.
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

