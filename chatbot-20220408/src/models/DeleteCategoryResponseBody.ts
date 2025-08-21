// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 4B3E0DE3-DC57-5BFE-88D4-ADD8ED024F55
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

