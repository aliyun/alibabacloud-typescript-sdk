// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesResponseBodyWebCCRules extends $dara.Model {
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **close**: The requests that match the rule are blocked.
   * *   **captcha**: Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests that match the rule is implemented.
   * 
   * @example
   * close
   */
  act?: string;
  /**
   * @remarks
   * The number of requests that are allowed from a single IP address. Valid values: **2** to **2000**.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The check interval. Valid values: **5** to **10800**. Unit: seconds.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The match mode. Valid values:
   * 
   * *   **prefix**: prefix match.
   * *   **match**: exact match.
   * 
   * @example
   * prefix
   */
  mode?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * wq
   */
  name?: string;
  /**
   * @remarks
   * The validity period. Valid values: **1** to **1440**. Unit: minutes.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The check path.
   * 
   * @example
   * /hello
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

