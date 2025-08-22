// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1E7BA3EB-B0EF-53F5-9999-07CAD6D9F8A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

