// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveDelayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream. You can specify an asterisk (\\*) to match all AppNames under the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The duration for which the playback is delayed. The value must be an integer. Valid values: 16 to 3600. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  delayTime?: number;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can use the wildcard (\\*) to specify all StreamNames under the AppName.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The trigger mode for the task. Valid values:
   * 
   * - **PUBLISH_ONLY**: Stream delay is triggered only by relevant parameters in the ingest URL.
   * 
   * - **CONFIG_ONLY**: Stream delay is triggered only by the configuration. Parameters in the ingest URL are ignored.
   * 
   * - **PUBLISH_CONFIG**: Stream delay is triggered by both the configuration and parameters in the ingest URL. Parameters in the ingest URL have a higher priority than the configuration.
   * 
   * @example
   * PUBLISH_ONLY
   */
  taskTriggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      delayTime: 'DelayTime',
      domain: 'Domain',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      stream: 'Stream',
      taskTriggerMode: 'TaskTriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      delayTime: 'number',
      domain: 'string',
      ownerId: 'number',
      regionId: 'string',
      stream: 'string',
      taskTriggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

