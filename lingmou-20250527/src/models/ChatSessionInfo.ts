// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatSessionInfo extends $dara.Model {
  createdAt?: number;
  mainAccountId?: number;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      mainAccountId: 'mainAccountId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      mainAccountId: 'number',
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

