// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat } from "./SenderStatisticsByTagNameAndBatchIdresponseBodyDataStat";


export class SenderStatisticsByTagNameAndBatchIDResponseBodyData extends $dara.Model {
  stat?: SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': SenderStatisticsByTagNameAndBatchIDResponseBodyDataStat },
    };
  }

  validate() {
    if(Array.isArray(this.stat)) {
      $dara.Model.validateArray(this.stat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

