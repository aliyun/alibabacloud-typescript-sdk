// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagResponseBody extends $dara.Model {
  /**
   * @example
   * 23000F3C-0EFE-4C89-82EE-E04F42D37B3C
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

