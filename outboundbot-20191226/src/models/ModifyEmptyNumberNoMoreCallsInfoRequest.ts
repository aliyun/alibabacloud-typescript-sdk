// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmptyNumberNoMoreCallsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Enable or disable the nonexistent number no-call feature.
   * 
   * @example
   * true
   */
  emptyNumberNoMoreCalls?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 6cc9f5ca-2cb6-4cc7-a46b-2bbfd3e61b22
   */
  entryId?: string;
  /**
   * @remarks
   * Policy level. Use 2 for business instances.
   * 
   * - 0: system
   * 
   * - 1: tenant
   * 
   * - 2: instance
   * 
   * @example
   * 2
   */
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      emptyNumberNoMoreCalls: 'EmptyNumberNoMoreCalls',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberNoMoreCalls: 'boolean',
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

