// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAvatarSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
   */
  requestId?: string;
  /**
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

