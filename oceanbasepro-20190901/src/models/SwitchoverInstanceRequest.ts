// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchoverInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to force the switchover.
   * - true: Force the switchover.
   * - false: Do not force the switchover.
   * 
   * @example
   * true
   */
  forced?: boolean;
  /**
   * @remarks
   * The instance ID of the primary/standby instance. You can set the default value to the instance ID of the instance to be switched to the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID of the instance to be switched to the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ob4bv8o7sp****
   */
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forced: 'Forced',
      instanceId: 'InstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forced: 'boolean',
      instanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

