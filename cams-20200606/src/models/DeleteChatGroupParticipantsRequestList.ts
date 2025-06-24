// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupParticipantsRequestList extends $dara.Model {
  /**
   * @example
   * 86138***
   */
  participantNumber?: string;
  static names(): { [key: string]: string } {
    return {
      participantNumber: 'ParticipantNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participantNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

