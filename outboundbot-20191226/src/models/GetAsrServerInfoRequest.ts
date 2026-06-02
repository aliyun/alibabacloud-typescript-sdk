// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrServerInfoRequest extends $dara.Model {
  /**
   * @example
   * 024f8cf0-c842-4c01-b74b-c8667e4579c7
   */
  entryId?: string;
  /**
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

