// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * i207023871669364793713
   */
  sessionId?: string;
  /**
   * @remarks
   * Session token
   * 
   * @example
   * 03f53c719015a9ad4f4f55d66cac2dac161b18e8065ca75a3220b89de389c980
   */
  sessionToken?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      sessionToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

