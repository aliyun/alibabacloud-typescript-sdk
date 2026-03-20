// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatSessionInfo extends $dara.Model {
  /**
   * @example
   * 1755680969
   */
  createdAt?: number;
  /**
   * @example
   * 1234567
   */
  mainAccountId?: number;
  /**
   * @example
   * 7239F9E5-A4DB-55BA-B701-0CE47DBDB0A8
   */
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

