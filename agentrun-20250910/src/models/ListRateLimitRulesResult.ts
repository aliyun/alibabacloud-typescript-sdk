// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRateLimitRulesOutput } from "./ListRateLimitRulesOutput";


export class ListRateLimitRulesResult extends $dara.Model {
  /**
   * @remarks
   * A value of `SUCCESS` indicates a successful request. If the request fails, an error code is returned.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Detailed information about the rate limit rules.
   * 
   * @example
   * {}
   */
  data?: ListRateLimitRulesOutput;
  /**
   * @remarks
   * The unique request ID, used for troubleshooting.
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
      data: ListRateLimitRulesOutput,
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

