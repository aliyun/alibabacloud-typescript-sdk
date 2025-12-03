// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHBaseSlbServerResponseBody extends $dara.Model {
  /**
   * @example
   * 7242130A-82CF-49BF-AB32-30DCB819EBA6
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

