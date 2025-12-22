// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsRequest extends $dara.Model {
  /**
   * @example
   * function%
   */
  functionNamePattern?: string;
  /**
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionNamePattern: 'functionNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionNamePattern: 'string',
      maxResults: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

