// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHBaseSlbServerResponseBody extends $dara.Model {
  /**
   * @example
   * 61FC5B21-87B0-41BC-9686-9DA395EB40B6
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

