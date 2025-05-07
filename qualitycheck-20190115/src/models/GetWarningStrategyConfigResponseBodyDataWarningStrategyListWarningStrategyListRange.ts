// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange extends $dara.Model {
  rangeNum?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      rangeNum: 'RangeNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rangeNum: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

