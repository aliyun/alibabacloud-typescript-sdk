// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of returned entries.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The keyword that is used to search for templates.
   */
  name?: string;
  /**
   * @remarks
   * The token that determines the start position of the query. Set this parameter to the value of the NextToken parameter that is returned from the last call.
   * 
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the template. Valid values: · System · Custom
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

