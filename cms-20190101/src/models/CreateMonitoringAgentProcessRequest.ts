// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitoringAgentProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze51wjtwox01r8g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * java
   */
  processName?: string;
  /**
   * @remarks
   * The user who launches the process.
   * 
   * @example
   * admin
   */
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

