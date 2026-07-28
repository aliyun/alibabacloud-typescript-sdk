// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the drift detection configuration (fuzzy match).
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @remarks
   * Maximum number of records to retrieve in a single request. Valid range: 1–200. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query credential (Token). Set this parameter to the NextToken value returned by the previous API call.
   * 
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

