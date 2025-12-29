// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushVoiceBoxCommandsRequestCommands extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commandName?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      commandDomain: 'CommandDomain',
      commandName: 'CommandName',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDomain: 'string',
      commandName: 'string',
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVoiceBoxCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commands?: PushVoiceBoxCommandsRequestCommands[];
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': PushVoiceBoxCommandsRequestCommands },
      hotelId: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

