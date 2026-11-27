// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, created and queried via the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The existing channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The existing cloud recording job ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

