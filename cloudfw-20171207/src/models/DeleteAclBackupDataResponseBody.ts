// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclBackupDataResponseBody extends $dara.Model {
  /**
   * @example
   * 75E60025-43C5-5635-B7B7-272C5246****
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

