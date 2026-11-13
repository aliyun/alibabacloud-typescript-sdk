// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
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
  visibility?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      q: 'Q',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      q: 'string',
      visibility: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.visibility)) {
      $dara.Model.validateArray(this.visibility);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

