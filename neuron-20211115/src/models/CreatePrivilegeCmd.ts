// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StrategyItem } from "./StrategyItem";


export class CreatePrivilegeCmd extends $dara.Model {
  accountId?: string;
  roleId?: number;
  strategyItems?: StrategyItem[];
  strategys?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleId: 'roleId',
      strategyItems: 'strategyItems',
      strategys: 'strategys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleId: 'number',
      strategyItems: { 'type': 'array', 'itemType': StrategyItem },
      strategys: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.strategyItems)) {
      $dara.Model.validateArray(this.strategyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

