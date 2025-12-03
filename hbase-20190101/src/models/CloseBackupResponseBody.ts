// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseBackupResponseBody extends $dara.Model {
  /**
   * @example
   * F1A11940-0C34-4385-864F-A01E29B55F6A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

