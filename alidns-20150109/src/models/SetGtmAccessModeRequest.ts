// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetGtmAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * 
   * - **AUTO**: Automatic switchover
   * 
   * - **DEFAULT**: The primary address pool collection
   * 
   * - **FAILOVER**: The secondary address pool collection
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

