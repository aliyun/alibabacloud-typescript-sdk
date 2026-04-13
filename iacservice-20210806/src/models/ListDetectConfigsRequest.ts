// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigsRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 30BaZ9ekYWXJdqshYecA++coNg7qT1Zbm3RfLyFIZeY=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      detectConfigName: 'detectConfigName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

