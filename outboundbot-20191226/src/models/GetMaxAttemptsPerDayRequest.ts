// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaxAttemptsPerDayRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2bfa5ae4-7185-4227-a3b8-328f26f11be1
   */
  entryId?: string;
  /**
   * @remarks
   * The policy level. The default value is 2 for a business instance.
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

