// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTerminalsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can specify only one application ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel. You can specify only one channel ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @remarks
   * The IDs of the users that you want to remove.
   * 
   * This parameter is required.
   */
  terminalIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      terminalIds: 'TerminalIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      terminalIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.terminalIds)) {
      $dara.Model.validateArray(this.terminalIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

