// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaseStrategyPeriodRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 024f8cf0-c842-4c01-b74b-c8667e4579c7
   */
  entryId?: string;
  /**
   * @remarks
   * Strategy level. Default value is 2.
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

