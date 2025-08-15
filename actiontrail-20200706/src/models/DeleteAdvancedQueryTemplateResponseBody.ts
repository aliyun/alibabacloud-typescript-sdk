// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 95F2CD1D-9BD3-564A-A74A-743FFC5E46E5
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

