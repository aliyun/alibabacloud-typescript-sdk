// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseAICoachTaskSessionRequest extends $dara.Model {
  /**
   * @example
   * 11
   */
  sessionId?: string;
  /**
   * @example
   * 273610276967782972
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

