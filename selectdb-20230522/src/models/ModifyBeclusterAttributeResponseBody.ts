// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBEClusterAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 58E21E11-90FF-50F8-A615-8DEB193676E0
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

