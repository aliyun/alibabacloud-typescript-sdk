// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTicketRequestTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * auto-test-1727143229007.pdf
   */
  fileName?: string;
  /**
   * @example
   * key1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

