// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance before you restart it.
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  forceStop?: string;
  /**
   * @remarks
   * The ID of the instance that you want to reboot. You can specify only one instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-instanceid****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceStop: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

