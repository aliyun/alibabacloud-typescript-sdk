// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenBackupResponseBody extends $dara.Model {
  /**
   * @example
   * C977DF60-7D06-4E34-A27D-8BC696C5112A
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

