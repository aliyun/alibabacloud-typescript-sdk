// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForModifyingDSRecordResponseBody extends $dara.Model {
  /**
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @example
   * e893148f-6343-4ae1-9eba-6e2a4116e142
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

