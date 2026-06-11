// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAlertRulesInput } from "./QueryAlertRulesInput";


export class QueryAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for querying alert rules.
   */
  body?: QueryAlertRulesInput;
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
      body: 'body',
      clientToken: 'clientToken',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: QueryAlertRulesInput,
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

