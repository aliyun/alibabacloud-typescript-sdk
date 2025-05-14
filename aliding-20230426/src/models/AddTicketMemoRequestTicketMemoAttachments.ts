// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTicketMemoRequestTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * "ticket/image/44xxxx9/43003/e27204b38xxxx1640499.txt
   */
  fileName?: string;
  /**
   * @example
   * wahaha.txt
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

