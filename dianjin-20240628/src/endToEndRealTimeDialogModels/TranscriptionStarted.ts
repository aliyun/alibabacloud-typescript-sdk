// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionStarted extends $dara.Model {
  sessionId?: string;
  openingRemarks?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      openingRemarks: 'openingRemarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      openingRemarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

