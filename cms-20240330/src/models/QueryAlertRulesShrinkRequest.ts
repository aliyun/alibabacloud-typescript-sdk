// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for querying alert rules.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * xxxxx-xxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of data records to read in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start reading. If this parameter is left empty, data is read from the beginning.
   * 
   * @example
   * 123456
   */
  nextToken?: string;
  queryJson?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queryJson: 'queryJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

