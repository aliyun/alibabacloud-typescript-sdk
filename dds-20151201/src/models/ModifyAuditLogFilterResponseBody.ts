// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E209BE2B-F264-4B9D-81F6-A5A5FB1FBF28
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

