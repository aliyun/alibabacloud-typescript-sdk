// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportObjectSuffixResponseBody extends $dara.Model {
  data?: string[];
  /**
   * @example
   * 2220FE66-76EF-5D9D-A0EE-3221CC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

