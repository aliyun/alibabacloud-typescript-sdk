// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForDeletingDnsHostResponseBody extends $dara.Model {
  /**
   * @example
   * 8fc97e44-837a-447d-ac61-ea28d2fe8a38
   */
  requestId?: string;
  /**
   * @example
   * 8fc97e44-837a-447d-ac61-ea28d2fexxxx
   */
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

