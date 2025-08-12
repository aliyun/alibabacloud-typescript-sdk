// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitoringAgentProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-KpVny6l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * > You must configure either `ProcessId` or `ProcessName`.
   * 
   * @example
   * 123****
   */
  processId?: string;
  /**
   * @remarks
   * The process name.
   * 
   * > You must configure either `ProcessId` or `ProcessName`.
   * 
   * @example
   * http
   */
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processId: 'string',
      processName: 'string',
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

