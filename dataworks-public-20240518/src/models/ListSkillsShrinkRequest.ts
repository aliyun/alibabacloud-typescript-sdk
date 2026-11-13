// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter in the first request. In subsequent requests, specify the `NextToken` value returned in the previous response to retrieve the next page.
   * 
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword used for fuzzy matching by skill name.
   * 
   * @example
   * analysis
   */
  q?: string;
  /**
   * @remarks
   * The visibility levels used to filter the results. You can specify multiple values.
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

