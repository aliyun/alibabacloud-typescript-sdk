// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServerSystemToolsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

