// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTokenRateLimitConfigRule extends $dara.Model {
  /**
   * @remarks
   * The action to take when a request exceeds the token rate limit.
   */
  limitMode?: string;
  /**
   * @remarks
   * The scope of the rate limit, such as per user or per project.
   */
  limitType?: string;
  /**
   * @remarks
   * The maximum number of tokens allowed within the defined time period. For example, if the time unit is one minute, this value represents the tokens-per-minute (TPM) limit.
   */
  limitValue?: number;
  /**
   * @remarks
   * The key that identifies the request source. Its value is extracted from the request context to apply the rule.
   */
  matchKey?: string;
  /**
   * @remarks
   * The matching logic applied to the value of `matchKey`.
   */
  matchType?: string;
  /**
   * @remarks
   * The value to match. The rate limit applies only when the value of `matchKey` in the request matches this value, according to the `matchType`.
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

