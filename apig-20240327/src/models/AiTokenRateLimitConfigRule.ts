// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTokenRateLimitConfigRule extends $dara.Model {
  /**
   * @remarks
   * The throttling mode.
   * 
   * @example
   * TokenPerMinute
   */
  limitMode?: string;
  /**
   * @remarks
   * The throttling type.
   * 
   * @example
   * Consumer
   */
  limitType?: string;
  /**
   * @remarks
   * The throttling value.
   * 
   * @example
   * 1000
   */
  limitValue?: number;
  /**
   * @remarks
   * The match key name.
   * 
   * @example
   * X-API-Key
   */
  matchKey?: string;
  /**
   * @remarks
   * The matching method.
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * The match value.
   * 
   * @example
   * consumer-a
   */
  matchValue?: string;
  static names(): { [key: string]: string } {
    return {
      limitMode: 'limitMode',
      limitType: 'limitType',
      limitValue: 'limitValue',
      matchKey: 'matchKey',
      matchType: 'matchType',
      matchValue: 'matchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitMode: 'string',
      limitType: 'string',
      limitValue: 'number',
      matchKey: 'string',
      matchType: 'string',
      matchValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

