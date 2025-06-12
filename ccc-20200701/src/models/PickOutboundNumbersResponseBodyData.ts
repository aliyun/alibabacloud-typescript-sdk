// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PickOutboundNumbersResponseBodyDataCallee } from "./PickOutboundNumbersResponseBodyDataCallee";
import { PickOutboundNumbersResponseBodyDataCaller } from "./PickOutboundNumbersResponseBodyDataCaller";


export class PickOutboundNumbersResponseBodyData extends $dara.Model {
  callee?: PickOutboundNumbersResponseBodyDataCallee;
  caller?: PickOutboundNumbersResponseBodyDataCaller;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: PickOutboundNumbersResponseBodyDataCallee,
      caller: PickOutboundNumbersResponseBodyDataCaller,
    };
  }

  validate() {
    if(this.callee && typeof (this.callee as any).validate === 'function') {
      (this.callee as any).validate();
    }
    if(this.caller && typeof (this.caller as any).validate === 'function') {
      (this.caller as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

