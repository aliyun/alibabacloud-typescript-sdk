// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @example
   * analysis
   */
  q?: string;
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

