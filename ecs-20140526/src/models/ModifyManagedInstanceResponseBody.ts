// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyManagedInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The managed instance ID.
   * 
   * @example
   * mi-hz01nmcf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the managed instance.
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

