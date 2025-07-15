// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveDelayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can specify an asterisk (\\*) as the value to match all applications that belong to the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The duration for which the playback of the live stream is delayed. The value must be an integer. Valid values: 16 to 3600. Unit: seconds.
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
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can use the wildcard (\\*) to specify all streams of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The trigger mode. Valid values:
   * 
   * *   **PUBLISH_ONLY**: Stream delay can be triggered only by specifying the stream delay parameter in the ingest URL.
   * *   **CONFIG_ONLY**: Stream delay can be triggered only by the stream delay configuration.
   * *   **PUBLISH_CONFIG**: Stream delay can be triggered by the stream delay parameter in the ingest URL or the stream delay configuration. The stream delay parameter takes precedence over the stream delay configuration.
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

