// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionStarted extends $dara.Model {
  openingRemarks?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      openingRemarks: 'openingRemarks',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openingRemarks: 'string',
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

