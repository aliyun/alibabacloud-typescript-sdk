// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndToEndRealTimeDialogResponseBody extends $dara.Model {
  /**
   * @example
   * 1C98B466-D6E0-5252-A60B-F345CBB33DDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

