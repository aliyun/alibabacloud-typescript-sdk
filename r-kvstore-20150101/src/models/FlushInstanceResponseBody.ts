// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlushInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **FlushInstance**.
   * 
   * @example
   * 8D0C0AFC-E9CD-47A4-8395-5C31BF9B3E7
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

