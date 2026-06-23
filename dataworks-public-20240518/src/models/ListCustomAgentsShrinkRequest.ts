// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on a single page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Omit this parameter for the first request. For subsequent requests, use the `NextToken` value from the previous response to retrieve the next page.
   * 
   * @example
   * 12345
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for a fuzzy match by agent name.
   * 
   * @example
   * analysis
   */
  q?: string;
  /**
   * @remarks
   * Filters the results by visibility level. You can specify multiple levels.
   * 
   * @example
   * -
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

