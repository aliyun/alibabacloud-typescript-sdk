// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackInstanceResponseBodyStackInstance } from "./GetStackInstanceResponseBodyStackInstance";


export class GetStackInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8A6B693-82C8-419D-8796-DE99EC33CFF9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack.
   */
  stackInstance?: GetStackInstanceResponseBodyStackInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInstance: 'StackInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInstance: GetStackInstanceResponseBodyStackInstance,
    };
  }

  validate() {
    if(this.stackInstance && typeof (this.stackInstance as any).validate === 'function') {
      (this.stackInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

