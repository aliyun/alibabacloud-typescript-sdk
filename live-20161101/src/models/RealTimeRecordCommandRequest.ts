// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeRecordCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The operation action. Valid values:
   * 
   * - **start**: forcibly starts recording. This must be called as the first operation and cannot be called again before stopping.
   * - **stop**: forcibly pauses recording. After the stream interruption delay (180 seconds by default) elapses, a recording is generated. This can only be called after start or restart. To generate the file immediately after calling stop, call cancel_delay.
   * - **cancel_delay**: immediately terminates the wait and generates a recording, completely stopping recording. This must be called after stop to generate the file in advance.
   * - **restart**: forcibly restarts recording. If recording is in progress before restart, a file is immediately generated. This can only be called when the task is in the started or stopped state.
   * 
   * This parameter is required.
   * 
   * @example
   * start
   */
  command?: string;
  /**
   * @remarks
   * The streamer\\"s streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
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
   * The stream name. Make sure that the StreamName is correct. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * > This operation supports only single-stream operations and does not support wildcards.
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

