// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTerminalsRequestAddTerminalParams } from "./AddTerminalsRequestAddTerminalParams";


export class AddTerminalsRequest extends $dara.Model {
  addTerminalParams?: AddTerminalsRequestAddTerminalParams[];
  mainBizType?: string;
  static names(): { [key: string]: string } {
    return {
      addTerminalParams: 'AddTerminalParams',
      mainBizType: 'MainBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTerminalParams: { 'type': 'array', 'itemType': AddTerminalsRequestAddTerminalParams },
      mainBizType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addTerminalParams)) {
      $dara.Model.validateArray(this.addTerminalParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

