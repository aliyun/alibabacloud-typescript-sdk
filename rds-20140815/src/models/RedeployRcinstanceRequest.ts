// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance that is in the Running state. Default value: false.
   * 
   * >  A forced stop is equivalent to the shutdown operation for a physical database server and can result in loss of data that is not written to storage devices. We recommend that you redeploy instances when they are in the Stopped state.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-s8t4zcwr5fnmfycn****
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
      forceStop: 'boolean',
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

