// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAclBackupDataResponseBody extends $dara.Model {
  /**
   * @example
   * 244EA37C-D2AB-54A7-B6E3-7ED0E9A1****
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

