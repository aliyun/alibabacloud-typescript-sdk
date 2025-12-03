// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableGroupsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aaaaaa
   */
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  pageOrder?: string;
  /**
   * @example
   * ID
   */
  pageSort?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageOrder: 'pageOrder',
      pageSort: 'pageSort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageOrder: 'string',
      pageSort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

