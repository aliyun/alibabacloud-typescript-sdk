// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionContentRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * UUID
   */
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

