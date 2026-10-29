// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunServiceScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
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
   * The list of directories of user data files to be mounted. The directories must be absolute paths, and the \\"/../\\" format is not supported. Example: ["/data/app01", "/data/user"]. Note: The input directory path is relative to the /data directory of the virtual device. The actual path on the virtual device is /data/{input path}.
   * 
   * @example
   * [\\"/data/app01\\", \\"/data/user\\"]
   */
  directorys?: string;
  /**
   * @remarks
   * Invalid parameter.
   * 
   * @example
   * android
   */
  podConfigName?: string;
  /**
   * @remarks
   * The maximum time to lock an idle device, in seconds. This parameter takes effect only when ServiceAction is set to PreSchedule. Default value: 300.
   * 
   * @example
   * 300
   */
  preLockedTimeout?: number;
  /**
   * @remarks
   * The device scheduling policy. The value is a string in JSON format.
   * 
   * @example
   * {\\"selectLevel\\": \\"RegionId\\", \\"values\\": [\\"cn-chengdu-telecom-2\\"]  }
   */
  scheduleStrategy?: string;
  /**
   * @remarks
   * The scheduling service operation. Valid values:
   * 
   * Container scenarios:
   * 
   * - Start: Selects and activates a schedulable cloud device and starts the service.
   * - Stop: Stops and releases the cloud device.
   * - Console: Interacts with the device by using commands when the UUID is in the scheduling state.
   * 
   * Bare metal or virtual machine scenarios:
   *   
   * - PreSchedule: Pre-schedules and locks a virtual machine instance.
   * - Confirm: Confirms the scheduling.
   * - Cancel: Cancels the scheduling.
   * - Console: Interacts with the device by using commands when the UUID is in the scheduling state.
   * 
   * This parameter is required.
   * 
   * @example
   * Start
   */
  serviceAction?: string;
  /**
   * @remarks
   * The list of container service commands. The value is a string in JSON array format.
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

