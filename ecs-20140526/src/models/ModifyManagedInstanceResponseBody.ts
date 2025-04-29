// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyManagedInstanceResponseBodyInstance } from "./ModifyManagedInstanceResponseBodyInstance";


export class ModifyManagedInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the managed instance.
   */
  instance?: ModifyManagedInstanceResponseBodyInstance;
  /**
   * @remarks
   * Details of the managed instance.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      instance: ModifyManagedInstanceResponseBodyInstance,
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

