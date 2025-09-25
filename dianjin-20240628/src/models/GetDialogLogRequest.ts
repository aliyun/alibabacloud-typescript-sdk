// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogLogRequest extends $dara.Model {
  /**
   * @example
   * 175600129454077743fb03ac54955a4be72ec08f9c216
   */
  id?: string;
  /**
   * @example
   * 1758010668S001w4paq82azm
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

