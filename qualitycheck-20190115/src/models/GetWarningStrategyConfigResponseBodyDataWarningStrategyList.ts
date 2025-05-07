// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList } from "./GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList";


export class GetWarningStrategyConfigResponseBodyDataWarningStrategyList extends $dara.Model {
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList[];
  static names(): { [key: string]: string } {
    return {
      warningStrategyList: 'warningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningStrategyList: { 'type': 'array', 'itemType': GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList },
    };
  }

  validate() {
    if(Array.isArray(this.warningStrategyList)) {
      $dara.Model.validateArray(this.warningStrategyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

