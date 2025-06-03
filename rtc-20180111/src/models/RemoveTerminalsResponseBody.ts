// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveTerminalsResponseBodyTerminals } from "./RemoveTerminalsResponseBodyTerminals";


export class RemoveTerminalsResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  terminals?: RemoveTerminalsResponseBodyTerminals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      terminals: 'Terminals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      terminals: RemoveTerminalsResponseBodyTerminals,
    };
  }

  validate() {
    if(this.terminals && typeof (this.terminals as any).validate === 'function') {
      (this.terminals as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

