// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeregisterManagedInstanceResponseBodyInstance } from "./DeregisterManagedInstanceResponseBodyInstance";


export class DeregisterManagedInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the managed instances.
   */
  instance?: DeregisterManagedInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F74942176
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DeregisterManagedInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

