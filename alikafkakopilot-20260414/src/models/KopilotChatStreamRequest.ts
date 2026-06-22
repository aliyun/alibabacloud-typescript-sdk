// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotChatStreamRequest extends $dara.Model {
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

