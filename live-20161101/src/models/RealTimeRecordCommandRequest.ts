// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeRecordCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The action to be performed. Valid values:
   * 
   * *   **start**: forcibly starts recording.
   * *   **stop**: forcibly stops recording. If the live stream is interrupted for longer than a specific latency, a recording is generated.
   * *   **cancel_delay**: resets the latency for stream interruption and completely stops recording. If the recording task is stopped when you perform this action, a recording is generated.
   * *   **restart**: forcibly restarts recording. If the live stream is being recorded when you perform this action, a recording is generated.
   * 
   * >  **stop** forcibly stops recording. By default, a recording is generated after 180 seconds. **cancel_delay** resets the latency for stream interruption from 180 seconds to 0 seconds. This means that a recording is generated immediately.
   * 
   * This parameter is required.
   * 
   * @example
   * start
   */
  command?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. Make sure that you specify the correct stream name. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      command: 'Command',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      command: 'string',
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

