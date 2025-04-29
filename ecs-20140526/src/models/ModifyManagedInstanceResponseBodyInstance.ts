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

