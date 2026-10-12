// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first query. For subsequent queries, specify the `NextToken` value returned from the previous query to retrieve the next page.
   * 
   * @example
   * 12345
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword used to perform a fuzzy match on agent names.
   * 
   * @example
   * analysis
   */
  q?: string;
  /**
   * @remarks
   * The visibility levels used to filter results. You can specify multiple values.
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

