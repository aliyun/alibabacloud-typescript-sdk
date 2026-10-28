// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of timeline entries to return per page. The value must be a positive integer.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, use the value returned from the previous page.
   * 
   * @example
   * example-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters messages by the specified run ID.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      runId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

