// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetGtmAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * The desired access policy. Valid values:
   * 
   * *   **AUTO: performs automatic switchover between the primary and secondary address pool sets upon failures.**
   * *   **DEFAULT: specifies the primary address pool set.**
   * *   **FAILOVER: specifies the secondary address pool set.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  accessMode?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * hra0hx
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      lang: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

