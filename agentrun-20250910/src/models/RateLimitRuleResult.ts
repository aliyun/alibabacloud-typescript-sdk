// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RateLimitRule } from "./RateLimitRule";


export class RateLimitRuleResult extends $dara.Model {
  /**
   * @remarks
   * A value of `SUCCESS` indicates the request succeeded. On failure, this field returns the corresponding error type.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the rate limit rule.
   * 
   * @example
   * {}
   */
  data?: RateLimitRule;
  /**
   * @remarks
   * A unique request identifier for troubleshooting.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RateLimitRule,
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

