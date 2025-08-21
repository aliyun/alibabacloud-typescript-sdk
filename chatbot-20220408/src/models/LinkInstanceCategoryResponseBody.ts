// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkInstanceCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * D8C96601-E645-1BD7-99F3-04EADAB84E29
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

