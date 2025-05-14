// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishTicketRequestTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * wahaha.txt
   */
  fileName?: string;
  /**
   * @example
   * ticket/image/44xxxx9/43003/e27xxxx1640499.txt
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

