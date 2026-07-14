// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTranscription extends $dara.Model {
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

