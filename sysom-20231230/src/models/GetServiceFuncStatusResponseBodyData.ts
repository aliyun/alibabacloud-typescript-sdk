// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceFuncStatusResponseBodyDataArgs } from "./GetServiceFuncStatusResponseBodyDataArgs";


export class GetServiceFuncStatusResponseBodyData extends $dara.Model {
  args?: GetServiceFuncStatusResponseBodyDataArgs;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: GetServiceFuncStatusResponseBodyDataArgs,
    };
  }

  validate() {
    if(this.args && typeof (this.args as any).validate === 'function') {
      (this.args as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

