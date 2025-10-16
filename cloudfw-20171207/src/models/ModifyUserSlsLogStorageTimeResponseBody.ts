// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserSlsLogStorageTimeResponseBody extends $dara.Model {
  /**
   * @example
   * 337A4DBA-8A01-5E9C-99CA-84293E13****
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

