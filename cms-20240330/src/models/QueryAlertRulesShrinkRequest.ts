// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for querying alert rules.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotency of the request.
   * 
   * @example
   * xxxxx-xxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * 123456
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
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

