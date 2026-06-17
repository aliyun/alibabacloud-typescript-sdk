// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLRateLimitingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of rules.
   */
  ruleList?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLRateLimitingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: DescribeSQLRateLimitingRulesResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries returned for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, \\`Successful\\` is returned. If the request fails, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh0vHYf39hc0J5qELgsazkBk
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C0ACF0-DD29-4B67-9190-B7A48C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSQLRateLimitingRulesResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

