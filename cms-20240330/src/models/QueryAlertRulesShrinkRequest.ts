// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesShrinkRequest extends $dara.Model {
  bodyShrink?: string;
  /**
   * @example
   * xxxxx-xxxx-xxxx
   */
  clientToken?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
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

