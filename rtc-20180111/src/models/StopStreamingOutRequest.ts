// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which is created and queried via the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * An existing channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The ID of an existing bypass stream ingest job. Only a single ID is supported. It can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum length of 55 bytes. If not specified, the system will automatically generate one.
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

