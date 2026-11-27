// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTerminalsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only one ID is supported.
   * 
   * You can create and query application IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel that the user has joined. Only one ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * A list of user IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1811xxxx
   */
  terminalIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      terminalIds: 'TerminalIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
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

