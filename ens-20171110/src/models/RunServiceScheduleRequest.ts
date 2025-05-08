// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunServiceScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d9143f0
   */
  appId?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * This parameter is required.
   * 
   * @example
   * 180.166.45.146
   */
  clientIp?: string;
  /**
   * @remarks
   * The directory to which the data file is mounted. The value must be a full path and cannot be \\"/../\\". Example: ["/data/app01", "/data/user"]. Specify the relative path of the virtual device for this parameter. For example, specify /data for this parameter when the actual path of the virtual device is /data/{input path}.
   * 
   * @example
   * [\\"/data/app01\\", \\"/data/user\\"]
   */
  directorys?: string;
  /**
   * @remarks
   * The parameter does not take effect.
   * 
   * @example
   * android
   */
  podConfigName?: string;
  /**
   * @remarks
   * The maximum duration for locking an idle device. Unit: seconds. This parameter takes effect only if you set ServiceAction to PreSchedule. Default value: 300.
   * 
   * @example
   * 300
   */
  preLockedTimeout?: number;
  /**
   * @remarks
   * The scheduling policy of the device. The value must be a JSON string.
   * 
   * @example
   * {\\"selectLevel\\": \\"RegionId\\", \\"values\\": [\\"cn-chengdu-telecom-2\\"]  }
   */
  scheduleStrategy?: string;
  /**
   * @remarks
   * The scheduling operation. The value must be of the enumeration type. Valid values:
   * 
   * Container scenario:
   * 
   * *   Start: selects and activates an idle cloud device.
   * *   Stop: stops and releases the cloud device.
   * *   Console: performs the scheduling operation when the device is in the scheduling state.
   * 
   * Bare metal instance or virtual machine scenario:
   * 
   * *   PreSchedule: locks a virtual machine instance for scheduling.
   * *   Confirm: confirms the scheduling operation.
   * *   Cancel: cancels the scheduling operation.
   * *   Console: performs the scheduling operation when the device is in the scheduling state.
   * 
   * This parameter is required.
   * 
   * @example
   * Start
   */
  serviceAction?: string;
  /**
   * @remarks
   * The service commands. The value must be a JSON string.
   * 
   * @example
   * [{\\"containerName\\": \\"android\\",       \\"commands\\":[\\"cat /tmp/token.json\\"]    },    {      \\"commands\\":[\\"ls -l /data/data\\"]    }]
   */
  serviceCommands?: string;
  /**
   * @remarks
   * The UUID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * hdm_d4f1059a8e1afc0956bd71b497faa433
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientIp: 'ClientIp',
      directorys: 'Directorys',
      podConfigName: 'PodConfigName',
      preLockedTimeout: 'PreLockedTimeout',
      scheduleStrategy: 'ScheduleStrategy',
      serviceAction: 'ServiceAction',
      serviceCommands: 'ServiceCommands',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientIp: 'string',
      directorys: 'string',
      podConfigName: 'string',
      preLockedTimeout: 'number',
      scheduleStrategy: 'string',
      serviceAction: 'string',
      serviceCommands: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

