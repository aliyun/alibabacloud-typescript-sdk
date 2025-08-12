// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertStrategyRelation extends $dara.Model {
  alertName?: string;
  strategyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      strategyUuid: 'StrategyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      strategyUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

