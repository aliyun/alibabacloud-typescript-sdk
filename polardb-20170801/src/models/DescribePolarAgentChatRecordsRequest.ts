// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentChatRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1e28530a0da2c4755f165b1b8b9a73c9
   */
  sessionId?: string;
  /**
   * @example
   * polardb-console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

