// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments extends $dara.Model {
  /**
   * @example
   * wahaha.txt
   */
  fileName?: string;
  /**
   * @example
   * ticket/image/447xxxx9/43003/e2xxxec4243e940a1367_1625xxxx99.txt
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

