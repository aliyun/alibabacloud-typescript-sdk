// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmptyNumberNoMoreCallsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * db3e679b-7d5e-4d9b-828a-345adca455f3
   */
  entryId?: string;
  /**
   * @remarks
   * Strategy level. Set to 2 for business instances.
   * 
   * - 0: System
   * 
   * - 1: Tenant
   * 
   * - 2: Instance
   * 
   * @example
   * 2
   */
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

