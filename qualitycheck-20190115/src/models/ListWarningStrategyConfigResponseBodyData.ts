// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWarningStrategyConfigResponseBodyDataData } from "./ListWarningStrategyConfigResponseBodyDataData";


export class ListWarningStrategyConfigResponseBodyData extends $dara.Model {
  data?: ListWarningStrategyConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWarningStrategyConfigResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

