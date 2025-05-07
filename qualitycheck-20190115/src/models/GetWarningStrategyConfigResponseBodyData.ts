// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWarningStrategyConfigResponseBodyDataWarningStrategyList } from "./GetWarningStrategyConfigResponseBodyDataWarningStrategyList";


export class GetWarningStrategyConfigResponseBodyData extends $dara.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
      warningStrategyList: 'WarningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
      warningStrategyList: GetWarningStrategyConfigResponseBodyDataWarningStrategyList,
    };
  }

  validate() {
    if(this.warningStrategyList && typeof (this.warningStrategyList as any).validate === 'function') {
      (this.warningStrategyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

