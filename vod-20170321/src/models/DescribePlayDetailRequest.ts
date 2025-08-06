// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayDetailRequest extends $dara.Model {
  language?: string;
  playTs?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      playTs: 'PlayTs',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      playTs: 'string',
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

